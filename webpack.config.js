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
    { test: /.ts$/, loader: 'awesome-typescript-loader' }
  ]
  // plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // })
  // ]
};