// 基于node的 遵循commonjs规范

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let webpack = require('webpack')
let ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')
let lessExtract = new ExtractTextWebapckPlugin({
    filename:'css/less.css',
    disable: true //告诉他先不用这个对象
})
let cssExtract = new ExtractTextWebapckPlugin({
    filename:'css/css.css',
    disable: true
})
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
                    fallback:'style-loader', // 开发时
                    use: [
                        // { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                })
            },
            {
                test: /\.less$/, use: lessExtract.extract({
                    fallback:'style-loader', // 开发时
                    use: [
                        // { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'less-loader' }
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
        lessExtract,
        cssExtract,
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 清除打包文件夹插件
        new CleanWebpackPlugin(['./build']),
        // 打包html插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true, // 清除缓存
        })
    ], // 插件的配置
    mode: 'development', // 可以更改模式
    resolve: {} // 配置解析
}
// 1.在webpack中如何配置开发服务器 webpack-dev-server
// 2.webpack插件 1将html打包到build下可以自动引入生产的js npm install html-webpack-plugin -D
// 3.webpack插件 清除打包js文件产生的缓存用 使webpack先删除再生成打包文件夹 npm install clean-webpack-plugin -D
// 4.webpack插件 抽离样式 抽离到一个css文件 通过css文件的方式来引用 npm install extract-text-webpack-plugin@next (webpack3出的，加@next 表示安最新版本， 该插件可能会被mini-css-extract-plugin取代，是webpack最新出的插件)
