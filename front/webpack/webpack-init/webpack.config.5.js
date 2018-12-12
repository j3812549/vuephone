// 基于node的 遵循commonjs规范

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let webpack = require('webpack')
let ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')

let cssExtract = new ExtractTextWebapckPlugin({
    filename: 'css/css.css',
})
let CopyWebpackPlugin = require('copy-webpack-plugin')
// purifycsswebpack 必须用在html-webpack-plugin后面
let PurifycssWebpack = require('purifycss-webpack')
let glob = require('glob')
module.exports = {
    entry: './src/index.js', // 入口
    output: {
        filename: 'build.js',
        // 这个路径必须是绝对路径
        path: path.resolve('./build')
    }, // 出口
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true, // 服务器压缩
        open: true, // 自动打开浏览器
        hot: true // 配置热更新
    }, // 开发服务器
    module: {
        rules: [ // 从右往左写
            {   // ExtractTextWebapckPlugin.extract 抽离样式
                test: /\.css$/, use: cssExtract.extract({
                    fallback: 'style-loader', // 开发时
                    use: [
                        // { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' }
                    ]
                })
            }
        ]
    }, //模块配置
    plugins: [
        // 抽离css插件
        // new ExtractTextWebapckPlugin({
        //     filename:'css/index.css'
        // }),
        cssExtract,
        // 拷贝插件
        new CopyWebpackPlugin([
            {
                from: './src/doc',
                to: 'public'
            }
        ]),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 清除打包文件夹插件
        new CleanWebpackPlugin(['./build']),
        // 打包html插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true, // 清除缓存
        }),
        // 没用的css会消除掉
        new PurifycssWebpack({
            paths: glob.sync(path.resolve('src/*.html'))
        })
    ], // 插件的配置
    mode: 'development', // 可以更改模式
    resolve: {} // 配置解析
}
// 1.在webpack中如何配置开发服务器 webpack-dev-server
// 2.webpack插件 1将html打包到build下可以自动引入生产的js npm install html-webpack-plugin -D
// 3.webpack插件 清除打包js文件产生的缓存用 使webpack先删除再生成打包文件夹 npm install clean-webpack-plugin -D
// 4.webpack插件 抽离样式 抽离到一个css文件 通过css文件的方式来引用 npm install extract-text-webpack-plugin@next (webpack3出的，加@next 表示安最新版本， 该插件可能会被mini-css-extract-plugin取代，是webpack最新出的插件)
// 5.webpack插件 不打包没有使用到的样式 比如引入bootstrap样式不希望打包bootstrap中没使用到的插件 npm i purifycss-webpack purify-css glob -D
// 6.webpack插件 自动给一些 transform 的前缀 -webkit-transform 保留 不希望他被消除 npm install postcss-loader autoprefixer -D
// 7.webpack插件 希望将src目录下的某一个文件夹中的文件原封不动的打包 npm install copy-webpack-plugin -D