const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {               
    port: 3000,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Zachary Waggoner',
      template: './src/index.html',
      inject: 'body'
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true
      //},
      //favicon: '.src/assets/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Zachary Waggoner - Page 2',
      template: './src/pages/resume.html',
      filename: 'page2.html',
      inject: "body",
      //publicPath: '/page2'
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true
      //}
    }),
    new HtmlWebpackPlugin({
      title: 'Zachary Waggoner - Resume',
      template: './src/pages/resume.html',
      filename: 'resume.html',
      inject: "body",
      //publicPath: '/resume.html'
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true
      //}
    }),
    new HtmlWebpackPartialsPlugin({
      path: './src/layout/header.html',
      priority: 'high'
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      { 
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};