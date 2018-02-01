const path = require('path');

module.exports = {
  entry: './js/scripts-refatorado.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};