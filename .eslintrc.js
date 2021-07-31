module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'array-bracket-newline': ['error', 'consistent']
    },
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.spec.jsx'],
            env: {
                jest: true
            }
        }
    ]
}
