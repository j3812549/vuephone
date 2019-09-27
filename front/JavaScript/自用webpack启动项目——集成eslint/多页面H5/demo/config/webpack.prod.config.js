/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const distDir = path.join(__dirname, '../views')
const env = 'prod'

// eslint-disable-next-line no-undef
require('babel-polyfill')

const plugins = [
  new CleanWebpackPlugin(['views'], {
    // eslint-disable-next-line no-undef
    root: path.resolve(__dirname, '../'), // 根目录
    verbose: true // 开启在控制台输出信息
  }),
  new webpack.DefinePlugin({
    'process.env': '"production"'
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: true
      }
    },
    sourceMap: true,
    parallel: true
  }),
  new ExtractTextPlugin({
    filename: 'less/[name].[chunkhash:8].css',
    allChunks: true
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    // eslint-disable-next-line no-undef
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    canPrint: true
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'common/js/rem2.js'),
      to: 'static/js',
      ignore: ['.*']
    }
  ])
]

// eslint-disable-next-line no-undef
module.exports = {
  entry: utils.getEntry(env),
  // entry: Object.assign(utils.getEntry(env), {
  //   // 用到什么公共lib（例如jquery.js），就把它加进vendor去，目的是将公用库单独提取打包
  //   'vendor':Object.keys(packagejson.dependencies)
  // }),
  output: {
    path: distDir,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
        // include: [path.join(__dirname, '../src/js',)]
      },
      {
        test: /\.(css|less)$/,
        // loader: 'style-loader!less-loader'
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'px2rem-loader',
              options: {
                remUnit: 100
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    // eslint-disable-next-line no-undef
                    require('postcss-import')(),
                    // eslint-disable-next-line no-undef
                    require('autoprefixer')({ browsers: ['last 100 versions'] })
                  ]
                }
              }
            },
            {
              loader: 'less-loader'
            }
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        // loader: 'url-loader?limit=4096&name=images/[name]-[hash:5].[ext]',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'images/[name]-[hash:5].[ext]'
            }
          },
          {
            loader: 'img-webpack-loader', // 压缩大于4kb的图片
            options: {
              bypassOnDebug: true
            }
          }
        ]
        // use:[{
        //   loader: "file-loader",
        //   options:{
        //     name:'[name]-[hash:5].[ext]',
        //     outputPath:'./images',
        //     publicPath:'./images'
        //   }
        // }]
        /* limit：
           表示的是一个阀值,如果当前我们资源中的图片大于4kb就从.js中剥离出来，如果小于4kb打包进.js中
           name:打包出来的图片，放在那个文件夹下，用什么文件名称命名
           [name]代表你原始的文件名称
           [hash:5] 让浏览器支持图片的缓存
           [ext] 图片本身的拓展名
        */
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
    // moment: "moment",
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      // "reset.css": path.join(__dirname, '../src/common/css/reset.css'),
    }
  },
  plugins: plugins.concat(utils.plugins)
}
