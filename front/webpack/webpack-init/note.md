## 使用webpack
初始化 packge.json
```
npm init -y
```
- 全局安装
```
npm install webpack -g
```
- 本地安装
```
npm install webpack webpack-cli -D
加大D是线下环境用，打包后会失效
```

## 在webpack中所有文件都是模块
- js模块 模块化（AMD CMD es6Module commonjs)

## 直接允许webpack
会执行node_modules对应的bin下的webpack.cmd
```
npx webpack
```

## webpack
两个核心
- plugins
- loader

## css处理

```
npm install style-loader css-loader less less-loader -D
```