import { Request } from 'express';

export interface NestRequest extends Request {
    refreshTokenRaw: string;
}
