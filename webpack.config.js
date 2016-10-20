const webpack = require('webpack');

const basePlugins = [];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { 
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat((process.env.NODE_ENV === 'production') ? prodPlugins: []);

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
  },
  plugins: plugins
};