import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: ['http://localhost:3000'],
            credentials: true,
        },
    });

    app.use(helmet());
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

    const configService = app.get(ConfigService);
    const port = configService.get<number>('port');

    await app.listen(port, () => {
        console.log(`🚀 API running on http://localhost:${port}`);
    });
}
bootstrap();
