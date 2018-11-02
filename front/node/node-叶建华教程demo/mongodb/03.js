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

// 4.增删改查
/*
    // 4.1增加
    personModel.create([
        {name: '王菲', age: 48, chat: '我爱谢霆锋', sex: '女'},
        {name: '胡可可', age: 18, chat: '可可公主', sex: '女'},
        {name: '刘德华', age: 58, chat: '华仔'},
        {name: '那英', age: 50, chat: '我是那英', sex: '女'},
        {name: '周杰伦', age: 38, chat: 'jaychou'}
    ], (err) => {
        if (!err) {
            console.log('插入成功')
        } else {
            throw err;
        }
    })
  
*/
    // 4.2查
    // personModel.find({}, (err, docs) => {
    //     if (!err) {
    //         console.log(docs);
    //         console.log(typeof docs)
    //     }
    // })

    // personModel.find({name: '周杰伦'}, (err, docs) => {
    //     if (!err) {
    //         console.log(docs);
    //     }
    // })
    
    // personModel.find({}, {name: 1, _id: 0, sex: 1}, (err, docs)=> {
    //     if (!err) {
    //         console.log(docs)
    //     }
    // })

    // personModel.find({}, "-_id name sex", {skip: 2, limit: 5}, (err, docs) => {
    //     if (!err) {
    //         console.log(docs);
    //     } else {
    //         throw err
    //     }
    // })

    // 4.3修改
    // personModel.updateMany({name: '刘德华'}, {$set: {age: 22}}, (err) => {
    //     if (!err) {
    //         console.log('修改成功')
    //     } else {
    //         throw err
    //     }
    // })

    // 4.4删除
    // personModel.deleteMany({name: '那英'}, (err) => {
    //     if (!err) {
    //         console.log('删除成功')
    //     } else {
    //         throw err
    //     }
    // })

    // 4.5统计文档的个数
    personModel.countDocuments({}, (err, count) => {
        if (!err) {
            console.log(count)
        } else {
            throw err
        }
    })
