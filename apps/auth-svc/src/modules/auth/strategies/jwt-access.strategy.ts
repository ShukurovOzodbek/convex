import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { NestRequest } from '../../../types';
import { JwtPayload } from '../auth.common';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: NestRequest) => req?.cookies?.accessToken || null,
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: configService.get<string>('jwt.acccess.secret'),
            algorithms: ['HS512'],
            issuer: configService.get<string>('jwt.issuer'),
            audience: configService.get<string>('jwt.acccess.audience'),
            ignoreExpiration: false,
        });
    }
    async validate(payload: JwtPayload) {
        return { id: payload.sub, role: payload.role, tokenType: payload.type };
    }
}
