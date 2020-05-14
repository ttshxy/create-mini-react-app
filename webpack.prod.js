const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
let prodConfig = {
  mode: 'production',
  module: {},
  plugins: [
    // 压缩css
    new OptimizeCssAssetsPlugin({}),
    // 压缩js
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
  ],
};
module.exports = merge(baseConfig, prodConfig);
