import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [ConfigModule, UsersModule, AuthModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
