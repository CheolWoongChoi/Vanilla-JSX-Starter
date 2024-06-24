module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        pragma: 'createElement',
      },
    ],
  ],
  sourceMaps: 'inline',
};
