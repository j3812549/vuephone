// 1.引入模块
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/m_data',{ useNewUrlParser: true });

// 2.监听各种状态
let db = mongoose.connection;
db.on('error', () => {
    console.log('连接失败')
});

db.once('open', () => {
    console.log('连接成功')
})

db.once('close', () => {
    console.log('数据库断开成功')
})
