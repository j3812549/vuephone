// 1.连接数据库
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/m_data',{ useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('数据库连接成功')
});

// 2.创建Schema（对象模式）
let Schema = mongoose.Schema;
let personSchema = new Schema({
   name: String,
   age: Number,
   sex: {
       type: String,
       default: '男'
   },
   chat: String
});

// 3.创建Model对象
let personModel = mongoose.model('person', personSchema);

// 4.插入文档
personModel.create({
   name: '风哥' ,
   age: 20,
   chat: '波哥牛逼'
}, (err) => {
    if (!err) {
        console.log('插入成功')
    } else {
        throw err;
    }
});
