var path = require("path");
var fs = require("fs");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    //contentBase: '/',
    port: 8080
  },
  entry : {
    bundle : path.resolve(__dirname, "app/main.js"),
    vendors : ["react", "react-dom", "jquery", "react-router"]
  },
  output : {
    path : path.resolve(__dirname, "build"),
    filename : "[name].[hash].js",
    chunkFilename : "[name].[chunkhash:5].chunk.js",
    publicPath : '/',
  },
  resolve : {
    extensions:["",".js",".json",".jsx",".es6","css","scss","png","jpg","jpeg"],
    alias: {
      'react-router': path.join(__dirname, '..', 'modules')
    }
  },
  content : __dirname,
  node : {
    __dirname : true
  },
  module : {
    loaders : [
      {
        test : /\.js[x]?$/,
        exclude : /node_modules/,
        loader : "babel",
        query : {
            presets : ['es2015', 'stage-0', 'react']
        },
        plugins : ["transform-runtime"]
      },
      {
        test : /\.css$/,
        loader : ExtractTextPlugin.extract(["css", "postcss"])
      },
      {
        test : /\.scss$/,
        loader : ExtractTextPlugin.extract(["css", "sass", "postcss"])
      },
      {
        test : /\.(png|jpg)$/,
        loader : 'url',
        query : {limit : 10000, name:'images/[name].[ext]'}
      },
      {
        test : /\.(eot|woff|woff2|ttf|svg)((\?|\#)[\?\#\w\d_-]+)?$/,
        loader : "url",
        query : {limit: 10000, name: 'fonts/[name].[ext]'}
      }
    ]
  },
  postcss : [autoprefixer({browsers:["last 3 version", "Firefox >= 15", "IE >= 10", "Opera >= 12"]})],//{browsers:['last 2 versions']}
  plugins : [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      title : "I am index.html",
      template : path.resolve(__dirname, "app/__index.html"),
      filename : "index.html",
      chunks : ["vendors", "bundle"],
      inject : "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
