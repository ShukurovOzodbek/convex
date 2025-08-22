export interface EnvironmentVariables {
    port: number;
}

export default (): EnvironmentVariables => ({
    port: parseInt(process.env.PORT) || 4000,
});
