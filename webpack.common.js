const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');
const baseConfig = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                //这里的插件只是这对于postcss
                require('autoprefixer')(), //引入添加前缀的插件,第二个空括号是将该插件执行
              ],
            },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.js$/,
        //loader: 'happypack/loader?id=babel',
        loader: ['babel-loader?cacheDirectory'],
        include: path.join(__dirname, 'src'),
        // exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 单独生成css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css', // 最终输出的文件名
      chunkFilename: '[id].[hash].css',
    }),

    // 动态添加html
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终生成的文件名
      template: path.resolve(__dirname, 'src/index.html'), // 文件注入的模版
    }),
    new CleanWebpackPlugin(),
    // new HappyPack({
    //   //打包慢开启happyPack
    //   id: 'babel',
    //   loaders: ['babel-loader?cacheDirectory'],
    // }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
  //   },
  // },
};
module.exports = baseConfig;
