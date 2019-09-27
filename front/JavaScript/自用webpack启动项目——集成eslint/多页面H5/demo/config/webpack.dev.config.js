/* eslint-disable no-undef */
const utils = require('./utils')
const path = require('path')
const webpack = require('webpack')
const distDir = path.join(__dirname, '../dist')
const portfinder = require('portfinder')
const plugins = [
  new webpack.HotModuleReplacementPlugin()
]
const devWebpackConfig = {
  entry: utils.getEntry(),
  output: {
    path: distDir,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // eslint-disable-next-line no-undef
        include: [path.join(__dirname, '../src/js')]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-config-airbnb') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.(css|less)$/,
        loader: 'style-loader!css-loader!px2rem-loader?remUnit=100!less-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    proxy: {
      '/': {
        target: 'https://www.tiancai9.top/',
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      // "@": path.join(__dirname, '../src')
    }
  },
  plugins: plugins.concat(utils.plugins),
  devtool: 'cheap-module-eval-source-map'
  // devtool: 'source-map',
}
// eslint-disable-next-line no-undef
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  })
})
