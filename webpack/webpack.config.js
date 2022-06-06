const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
  },
  resolve: {
      extensions: ['.js' , 'mjs']
  },
  module: {
      rules: [
        {
          test: /\.m?js$/,
          use: {
            loader: "babel-loader"
          },
          exclude: /node_modules/
        },
        {
          test: /\.(css|styl)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "stylus-loader"
          ]
        },
        {
          test: /\.png/,
          type: "asset/resource",
          /*generator: {
            filename: 'static/images/[hash][ext][query]', Gestionar directorio de salida
          },*/
        }
      ]
    },
  plugins: [
      new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html', 
          filename: './index.html' 
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "assets/images"),
            to: "assets/images"
          }
        ]
      }),
  ]
}
