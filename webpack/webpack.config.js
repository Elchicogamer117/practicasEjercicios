const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
  },
  mode: 'production',
  resolve: {
      extensions: ['.js' , 'mjs'],
      alias: {
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@templates': path.resolve(__dirname, 'src/templates/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@images': path.resolve(__dirname, 'src/assets/images/')
      }
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
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[hash][ext]",
          },
        }
      ]
    },
  plugins: [
      new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html', 
          filename: './index.html' 
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css'
      }),
      new Dotenv(),
  ],
  optimization: {
    minimize:true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      ],
  }
}