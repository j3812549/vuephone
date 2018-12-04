const express = require('express');
const app = express();
const auth = require('./wechat/auth')

// 接受微信的请求
app.get('/wechat/index', auth())

app.listen(80, () => {
    console.log('服务器启动成功')
})