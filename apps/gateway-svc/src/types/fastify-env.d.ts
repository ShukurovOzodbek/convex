import "fastify";
import type {AppConfig} from "../config/config.schema";

declare module "fastify" {
    interface FastifyInstance {
        config: AppConfig;
    }
}
