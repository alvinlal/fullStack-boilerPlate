module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:@typescript-eslint/recommended', //
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        //'plugin:graphql', for some reason eslint shows error Failed to load plugin 'graphq' declared in 'Node-TypeScript-GraphQL-boilerPlate-setup\.eslintrc.js'
    ],
    rules: {
        'prettier/prettier': 1,
        '@typescript-eslint/no-var-requires': 0, //allows to use commonJs import ('require')
    },
};
