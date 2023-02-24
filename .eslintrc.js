module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {}
};
