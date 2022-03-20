/* eslint-disable array-bracket-spacing */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "jest",
    ],
    rules: {
        "react/jsx-indent": [2, 4],
        indent: ["error", 4, {
            SwitchCase: 1,
        } ],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double" ],
        semi: ["error", "never" ],
        "comma-dangle": ["warn", "always-multiline"],
        "no-multiple-empty-lines": ["warn", { max: 2 }],
        "react/prop-types": [0],
        "react/jsx-indent-props": [0],
    },
    ignorePatterns: ["**/*.svg", "**/*.css" ],
}
