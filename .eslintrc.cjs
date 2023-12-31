/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
        'plugin:storybook/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'vue/new-line-between-multi-line-property': 'error',
    },
}
