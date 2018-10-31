// 1.引入模块
let fs = require('fs');

// 2.读取文件
fs.readFile('it666_2.txt', (err, data) => {
    // 2.1判断
    if(!err){
        console.log(data.toString())
    }else{
        throw err;
    }
})