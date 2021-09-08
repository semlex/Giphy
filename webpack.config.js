const path = require('path');
const сopy = require('copy-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
  },
  mode: 'development',
  watch: true,
  module: {
      rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test:/\.(s*)css$/,
            use: [
               miniCss.loader,
               {
                loader: 'css-loader',
                options: {
                    url: false
                    }
                },
               'sass-loader'
            ]
         },
         {
            test:/\.(png|jpg|gif|jpeg)?$/,
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
          }
        }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: 'body'
      }),
      new miniCss({
        filename: 'css/style.css'
      }),
      new сopy({
        patterns: [
          { from: path.join(__dirname, 'src/img'), to: path.join(__dirname, 'dist/img') }
      ]}),
      new CleanWebpackPlugin()
  ]
};