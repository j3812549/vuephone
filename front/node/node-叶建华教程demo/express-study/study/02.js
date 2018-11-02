// 搭建静态文件库

let express = require('express');
let app = express();

app.use('文件所在的路径', express.static('文件路径'))
app.use('可同时配置多个项目', express.static('文件路径'))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(3000)