const webpack = require('webpack');

const basePlugins = [
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor'
  // })
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { 
      warnings: false,
      dead_code: true,
      unused: true
    }
  })
];

const plugins = basePlugins
  .concat((process.env.NODE_ENV === 'production') ? prodPlugins: []);

module.exports = {
  context: './src',
  entry: {
    app: './index.ts'
    // vendor: ['./library.ts']
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
  ],
  plugins: plugins
};