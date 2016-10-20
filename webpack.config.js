const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/
      }
    ]
  }
};