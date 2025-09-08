enum NodeEnv {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

export const AppConfigSchema = {
    type: 'object',
    required: ['PORT', 'NODE_ENV'],
    properties: {
        PORT: { type: 'integer', default: 3030 },
        NODE_ENV: { type: 'string', enum: Object.values(NodeEnv), default: 'development' },
        DATABASE_URL: { type: 'string' },
    },
} as const;

export type AppConfig = {
    PORT: number;
    NODE_ENV: NodeEnv;
};
