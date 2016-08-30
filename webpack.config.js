const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  loaders: [
    {
      test: /.js$/, 
      loader: 'babel', 
      exclude: /node_modules/
    }
  ]
};