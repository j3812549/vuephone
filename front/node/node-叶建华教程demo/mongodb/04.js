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

let person = new personModel({
    name: '宋小宝',
    age: 40,
    chat: '我是宋小宝'
})

person.save((err, product) => {
    if (!err) {
        console.log(product)
    } else {
        throw err
    }
})