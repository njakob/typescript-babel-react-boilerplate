module.exports = function(api) {
  api.cache.forever();
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          modules: 'commonjs',
          corejs: {
            version: 3,
          }
        },
      ],
      '@babel/typescript',
      '@babel/preset-react',
    ],
    plugins: [
      ['babel-plugin-module-resolver', {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
      }],
      '@babel/proposal-object-rest-spread',
      'babel-plugin-styled-components',
    ],
  };
};

