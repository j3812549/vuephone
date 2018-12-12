// 基于node的 遵循commonjs规范

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
// 单页 index.html 引用多个js
// 多页 a.html index.js / b.html a.js
module.exports = {
    // entry: './src/index.js', // 入口
    // entry可以写一个数组
    // entry:['./src/index.js', './src/a.js']
    entry:{ // 多入口 多出口
        index: './src/index.js',
        a:'./src/a.js'
    },
    output: {
        filename: 'build.js',
        // 这个路径必须是绝对路径
        path: path.resolve('./build')
    }, // 出口
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true, // 服务器压缩
        open: true // 自动打开浏览器
    }, // 开发服务器
    module: {}, //模块配置
    plugins: [
        // 清除打包文件夹插件
        new CleanWebpackPlugin(['./build']),
        // 打包html插件
        new HtmlWebpackPlugin({
            filename:'a.html',
            template:'./src/index.html',
            hash:true, // 清除缓存
            // minify:{
            //     // 删除html中的双引号
            //     removeAttributeQuotes:true,
            //     // 将html文件去除空格压缩一行
            //     collapseWhitespace:true
            // },
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'b.html',
            template:'./src/index.html',
            hash:true, // 清除缓存
            // minify:{
            //     // 删除html中的双引号
            //     removeAttributeQuotes:true,
            //     // 将html文件去除空格压缩一行
            //     collapseWhitespace:true
            // }
            chunks:['a']
        })
    ], // 插件的配置
    mode: 'development', // 可以更改模式
    resolve: {} // 配置解析
}
// 1.在webpack中如何配置开发服务器 webpack-dev-server
// 2.webpack插件 1将html打包到build下可以自动引入生产的js npm install html-webpack-plugin -D
// 3.webpack插件 清除打包js文件产生的缓存用 使webpack先删除再生成打包文件夹 npm install clean-webpack-plugin -D