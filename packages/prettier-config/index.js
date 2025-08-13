/** @type {import('prettier').Config} */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'lf',
    plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
    importOrder: ['^react$', '^next(/.*)?$', '<THIRD_PARTY_MODULES>', '^~/.*$', '^[./]']
};
export default config;
