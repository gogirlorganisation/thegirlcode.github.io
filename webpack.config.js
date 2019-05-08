const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    workshops: './src/js/workshops.js',
    workshop: './src/js/workshop.js'
  },
  output: {
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
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
      template: './src/about.html',
      filename: 'about/index.html',
      chunks: ['about']
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
    new CopyWebpackPlugin([{ from: 'src/static' }])
  ],
  devServer: {
    port: 3039,
    contentBase: 'src/static',
    publicPath: '/'
  }
};
