    var fs = require('fs');
    //创建目录（同步）加回调就是异步
    fs.mkdirSync('stuff');
    //删除目录（同步）
    fs.rmdirSync('stuff');

    // //删除文件(异步方法)
    // fs.unlink("writeMe.txt", function() {
    //     console.log("我在删除文件")
    // })