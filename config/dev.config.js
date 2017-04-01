const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = (env) => {
  return webpackMerge({
		devServer: {
			contentBase: baseConfig.outputPath,
			hot: true,
	    inline: true
		},
    entry: [
      'webpack-dev-server/client?' + baseConfig.devHost, // dev server
      'webpack/hot/only-dev-server',
      path.resolve(baseConfig.appPath, 'main.js'),
      path.resolve(baseConfig.appPath, 'index.html')
    ],
		plugins: [
	    new webpack.HotModuleReplacementPlugin(),
    	new ExtractTextPlugin('app.css')
	  ]
  },
  baseConfig.config())
}
