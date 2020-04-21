const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    team: './src/js/team.js',
    workshops: './src/js/workshops.js',
    workshop: './src/js/workshop.js',
    404: './src/js/404.js'
  },
  output: {
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        include: path.join(__dirname, 'src/static/img'),
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/team.html',
      filename: 'team/index.html',
      chunks: ['team']
    }),
    new HtmlWebpackPlugin({
      template: './src/workshops.html',
      filename: 'workshops/index.html',
      chunks: ['workshops']
    }),
    new HtmlWebpackPlugin({
      template: './src/workshop.html',
      filename: 'workshop/index.html',
      chunks: ['workshop']
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
      chunks: ['404']
    }),
    new CopyWebpackPlugin([{ from: 'src/static' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    port: 3039,
    contentBase: 'src/static',
    publicPath: '/'
  }
};
