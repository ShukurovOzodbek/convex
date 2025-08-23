import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { NestRequest } from '../../../types';
import { JwtPayload } from '../auth.common';

function refreshExtractor(req: NestRequest) {
    const token = req?.cookies?.refreshToken || null;
    req.refreshTokenRaw = token as string;
    return token;
}

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([refreshExtractor]),
            secretOrKey: configService.get<string>('jwt.refresh.secret'),
            algorithms: ['HS512'],
            issuer: configService.get<string>('jwt.issuer'),
            audience: configService.get<string>('jwt.acccess.audience'),
            ignoreExpiration: false,
            passReqToCallback: true,
        });
    }
    async validate(req: NestRequest, payload: JwtPayload) {
        return {
            id: payload.sub,
            jti: payload.jti,
            tokenType: payload.type,
            refreshTokenRaw: req.refreshTokenRaw,
        };
    }
}
