module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended', 'prettier/standard'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
  },
  rules: {
    'no-console': 'off',
  },
};
