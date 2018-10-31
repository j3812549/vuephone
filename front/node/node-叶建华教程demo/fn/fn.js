// 1.引入模块
let fs = require('fs');

// 2.打开文件
/*
    没有文件后会创建文件
    fn.openSync(path, flams[, mode])
*/
let fd = fs.openSync('it666.txt', 'w');
// console.log(fd)

// 3.写入内容
fs.writeFileSync(fd, "今天的桑叶很可爱，快来学习！");

// 4.保存并退出
fs.closeSync(fd);
