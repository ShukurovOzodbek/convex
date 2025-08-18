export interface EnvironmentVariables {
    port: number;
    database: {
        name: string,
        host: string,
        user: string,
        pass: string,
        port: number,
    }
}

export default (): EnvironmentVariables => ({
    port: parseInt(process.env.PORT) || 4000,
    database: {
        name: process.env.POSTGRES_NAME,
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        pass: process.env.POSTGRES_PASS,
        port: parseInt(process.env.POSTGRES_PORT),
    }
});
