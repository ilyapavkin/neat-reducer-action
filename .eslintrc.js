module.exports = {
    //root: true,
    extends: [
        'airbnb-base',
        'prettier'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {

        }
    },
    plugins: [
        'prettier'
    ],
    env: {
        node: true,
        browser: true
    },
    rules: {
        indent: [2, 4],
        quotes: [2, 'single'],
        'import/prefer-default-export': 0
    },
};