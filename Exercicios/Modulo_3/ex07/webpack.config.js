const path = require('path');

module.exports = {
  entry: {
    cru: './src/index.js',
    qualquer: './src/qualquer.js'
  },

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].newArquiv.js'
  }
}