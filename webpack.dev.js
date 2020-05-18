const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
let devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    progress: true,
    hot: true,
    overlay: true,
    open: true,
    publicPath: '/',
    host: 'localhost',
    port: '8080',
    historyApiFallback: true, // 解决react-router刷新找不到页面
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.30.33:8080',
    //     pathRewrite: {
    //       '^api': '/mock/api',
    //     },
    //   },
    // },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = merge(baseConfig, devConfig);
