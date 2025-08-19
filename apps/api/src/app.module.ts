import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { BotsModule } from './modules/bots/bots.module';
import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [ConfigModule, UsersModule, BotsModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
