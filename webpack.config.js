const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: isProduction
                  ? true
                  : {
                      localIdentName: '[name]_[local]_[hash:base64:5]',
                    },
                esModule: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      compress: true,
    },
  };
};
