import { join } from 'path';
import { Global, Module } from '@nestjs/common';
import { ConfigModule as BaseConfigmodule } from '@nestjs/config';
import configuration from './configuration';

@Global()
@Module({
    imports: [
        BaseConfigmodule.forRoot({
            envFilePath: [join(__dirname, '../../../../', '.env'), join(process.cwd(), '.env')],
            ignoreEnvFile: process.env.NODE_ENV === 'production',
            load: [configuration],
        }),
    ]
})
export class ConfigModule { }
