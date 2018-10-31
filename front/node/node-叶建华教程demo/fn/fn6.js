// 1.引入模块
let fs = require('fs');

// 2.创建读入流
let rs = fs.createReadStream('路径');
let ws = fs.createWriteStream('sp.mp4');

// 3.创建管道
rs.pipe(ws);