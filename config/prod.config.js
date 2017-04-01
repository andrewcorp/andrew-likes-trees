const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  return webpackMerge(baseConfig.config(), {
    devtool: 'source-map',
    entry: [
      "babel-polyfill",
      path.resolve(baseConfig.appPath, 'main.js'),
      path.resolve(baseConfig.appPath, 'index.html')
    ],
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          beautify: false,
          mangle: {
              screw_ie8: true,
              keep_fnames: true
          },
          compress: {
              screw_ie8: true
          },
          comments: false
        })
      ]
  })
}
