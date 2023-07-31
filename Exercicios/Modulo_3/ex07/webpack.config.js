const path = require('path');
const miniCss = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: [miniCss.loader,'css-loader']
    }]
  },
  plugins: [
    new miniCss()
  ]
}