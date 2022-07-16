module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
    },
    plugins: [],
    rules: {},
};
