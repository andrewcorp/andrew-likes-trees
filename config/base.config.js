const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appDir        = '../src';
const outputDir     = '../public';
const devServerPort = '8080';

const appPath     = path.resolve(__dirname, appDir);
const outputPath  = path.resolve(__dirname, outputDir);
const devHost     = 'http://localhost:' + devServerPort;


module.exports = {
  path,
  webpack,
  appPath,
  outputPath,
  devHost,
  config: () => {
    return {
      output: {
        path: outputPath,
        filename: "app.js",
    		publicPath: ''
      },

      module: {
        rules: [
  	      {
  	        test:     /\.(js)$/,
  	        include:  appPath,
  	        loaders:  ['babel-loader'],
  	      },{
            test:     /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                },
                'sass-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => { return [require('autoprefixer')] }
                  }
                }
              ]
            })
          },
  	      {
  	        test: /\.html$/,
  	        loader: "file-loader?name=[name].[ext]",
  	      }
        ]
      }
    }
  }
};
