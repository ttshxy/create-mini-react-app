# create-mini-react-app
使用webpack、babel搭建的轻量react开发脚手架

一键生成react + react-router + redux(dva) + axios + antd 高性能开发环境

## 使用

```javascript
npx create-mini-react-app app
cd app
yarn
yarn dev
```

运行后，在浏览中打开 http://localhost:8080 

## 项目结构

脚手架生成的目录如下，页面全部存放在pages中，webpack配置分为公共、开发、生产。

```
|-- Documents
    |-- .babelrc		
    |-- README.md
    |-- package.json
    |-- webpack.common.js         # webpack公用配置
    |-- webpack.dev.js            # webpack开发配置
    |-- webpack.prod.js           # webpack生产配置
    |-- dist                      # 项目打包生成目录
    |-- src
        |-- index.html
        |-- index.js              # 入口文件
        |-- Page                  # 页面
        |   |-- Admin
        |   |   |-- index.js
        |   |-- Home
        |       |-- index.js
        |-- imgs
        |   |-- logo.png
        |-- routes                 # 路由配置界面
        |   |-- renderRoutes.js
        |   |-- routes.js
        |-- style
        |   |-- index.css
        |   |-- index.less
        |-- utils
            |-- AsyncComponent.js   # 异步加载组件

```

## 基本功能

- 解析css、less ，自动抽离css,自动添加浏览器前缀
- 图片处理，生产环境下图片小于5kb转为base64格式
- ES6及以上自动转码，并使用@babel/polyfill处理部分函数浏览器不兼容问题
- 热加载
- 集成react-router、dva、antd、axios并支持按需加载
- 支持代理服务器，便于解决跨域问题

## 性能优化

- 生产环境下css压缩,单独抽离css

- react-router按需加载

- babel-loader使用缓存

- webpack使用externals或者splitChunks对较大的库进行分包。(根据不同的场景使用，使用externals可以借助cdn减小服务器带宽压力，默认使用splitChunks将react、react-router、axios等较大的库合并成一个包，提高性能)

- 打包速度较慢时一键开启happypack多线程打包

  ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1geyyvzgqa3g30ic0b6h3c.gif)

  react-router按需加载，当点击Admin时才请求Admin相关文件

## 打包发布

```
yarn build
```

使用yarn build打包后dist目录会生成打包好的文件。

```
yarn analyze
```

使用yarn analyze分析打包生成的文件大小,便于性能调优

!(https://tva1.sinaimg.cn/large/007S8ZIlgy1geyxxt4n28j31360hjn0g.jpg)

将代码上传服务器之前记得关闭分析配置选项

```
 new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,  // 发布到服务器之前设置为false,可删除dist目录下的分析文件
      statsOptions: { source: false },
    }),
```

