import fastifyEnv from '@fastify/env';
import Fastify, {FastifyInstance} from 'fastify';
import {join} from "path";
import * as dotenv from "dotenv";
import {AppConfigSchema} from "./config/config.schema";

dotenv.config({path: join(__dirname, "../../../", ".env")});
dotenv.config({path: join(process.cwd(), ".env")});

async function buildApp(): Promise<FastifyInstance> {
    const app: FastifyInstance = Fastify({logger: true});

    const configOptions = {
        confKey: 'config',
        schema: AppConfigSchema,
        dotenv: true
    };

    await app.register(fastifyEnv, configOptions);

    return app;
}

(async function () {
    const app = await buildApp();

    app.listen({port: app.config.PORT}, (err: Error, address: string) => {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }
        console.log(`App started on ${address}`);
    });
})();
