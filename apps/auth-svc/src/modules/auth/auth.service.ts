import { randomUUID } from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { addSeconds } from 'date-fns';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        const ok = await argon2.verify(user.password, password);
        if (!ok) return null;

        return { id: user.id, email: user.email };
    }

    async issueTokens(user: { id: string }, fingerprint?: string) {
        const jti = randomUUID();
        const now = Math.floor(Date.now() / 1000);
        const accessTtl = parseInt(process.env.JWT_ACCESS_TTL || '900', 10);
        const refreshTtl = parseInt(process.env.JWT_REFRESH_TTL || '2592000', 10);

        const access = await this.jwt.signAsync(
            { sub: user.id, type: 'access' },
            {
                secret: process.env.JWT_ACCESS_SECRET,
                algorithm: 'HS256',
                issuer: process.env.JWT_ISS,
                audience: process.env.JWT_AUD,
                expiresIn: accessTtl,
            },
        );

        const refresh = await this.jwt.signAsync(
            { sub: user.id, jti, type: 'refresh', iat: now },
            {
                secret: process.env.JWT_REFRESH_SECRET,
                algorithm: 'HS256',
                issuer: process.env.JWT_ISS,
                audience: process.env.JWT_AUD,
                expiresIn: refreshTtl,
            },
        );

        const hash = await argon2.hash(refresh);
        await this.prisma.refreshSession.create({
            data: {
                userId: user.id,
                jti,
                hashedToken: hash,
                expiresAt: addSeconds(new Date(), refreshTtl),
            },
        });

        return { access, refresh, jti };
    }

    async rotateRefreshToken(userId: string, jti: string, refreshRaw: string) {
        const session = await this.prisma.refreshSession.findUnique({ where: { jti } });

        if (!session || session.userId !== userId || session.revokedAt)
            throw new UnauthorizedException();

        const ok = await argon2.verify(session.hashedToken, refreshRaw);
        if (!ok) throw new UnauthorizedException();

        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new UnauthorizedException();

        const next = await this.issueTokens({ id: user.id });
        await this.prisma.refreshSession.update({
            where: { jti },
            data: { revokedAt: new Date(), replacedBy: next.jti },
        });

        return next;
    }

    async revokeByJti(jti: string) {
        await this.prisma.refreshSession.updateMany({
            where: { jti, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }

    async revokeAllForUser(userId: string) {
        await this.prisma.refreshSession.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
}
