/* eslint-disable */

"use strict";

module.exports = function(api) {
  api.cache.forever();
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          modules: 'commonjs'
        },
      ],
      '@babel/typescript',
      '@babel/preset-react',
    ],
    plugins: [
      ['babel-plugin-module-resolver', {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx'],
        stripExtensions: ['.js'],
      }],
      '@babel/proposal-object-rest-spread',
      'babel-plugin-styled-components',
    ],
  };
};

