const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'ReactMenuBar.js',
    libraryTarget: 'umd',
    library: 'ReactMenuBar',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  externals: ['react', 'react-dom', 'prop-types'],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
