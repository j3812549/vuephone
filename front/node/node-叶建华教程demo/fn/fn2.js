// 异步操作文件
// 1.引入模块
let fs = require('fs')

// 2.打开文件
fs.open('it666_1.txt', 'a', (err, fd) => {
    if(!err){
        // 2.1写入文件
        fs.writeFile(fd, '你相信这个世界吗', (err) => {
            // 2.2写入成功
            if(!err){
                console.log('写入文件成功')
            }
        })
    }else{
        throw err;
    }
})