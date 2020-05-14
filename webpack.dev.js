const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
let devConfig = {
  mode: 'development',
  module: {},
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    overlay: true,
    open: true,
    publicPath: '/',
    host: 'localhost',
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://192.168.30.33:8080',
        pathRewrite: {
          '^api': '/mock/api',
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ], // 替换插件],
};
module.exports = merge(baseConfig, devConfig);
