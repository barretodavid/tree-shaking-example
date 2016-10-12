const webpack = require('webpack');

const basePlugins = [];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
];

const plugins = basePlugins
  .concat((process.env.NODE_ENV === 'production') ? prodPlugins: []);

module.exports = {
  context: './src',
  entry: {
    app: './index.ts'
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