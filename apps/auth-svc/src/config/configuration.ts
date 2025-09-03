export interface EnvironmentVariables {
    port: number;
    jwt: {
        issuer: string;
        audience: string;
        access: {
            secret: string;
            ttl: number;
        };
        refresh: {
            secret: string;
            ttl: number;
        };
    };
}

export default (): EnvironmentVariables => ({
    port: parseInt(process.env.PORT) || 4000,
    jwt: {
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
        access: {
            secret: process.env.JWT_ACCESS_SECRET,
            ttl: parseInt(process.env.JWT_ACCESS_TTL) || 10,
        },
        refresh: {
            secret: process.env.JWT_REFRESH_SECRET,
            ttl: parseInt(process.env.JWT_REFRESH_TTL) || 10,
        },
    },
});
