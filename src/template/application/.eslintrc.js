module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'src/template/application/tsconfig.json',
  },
  env: {
    browser: true,
  },
  globals: {
    __DEV__: true,
    __BUILD_INFO__: true,
  },
  rules: {
    'no-underscore-dangle': ['error', {
      allow: [
        '__BROWSER__',
        '__BUILD_INFO__',
      ],
    }],
  }
};
