
module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    __DEV__: true,
    __BUILD_INFO__: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    '@typescript-eslint/indent': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'no-underscore-dangle': ['error', {
      allow: [
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
      ],
    }],
  }
};
