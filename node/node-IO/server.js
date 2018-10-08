    var fs = require('fs');
    //异步执行
    var readMe = fs.readFile("readMe.txt", "utf8", function(err, data) {
        console.log(data)
    })

    //同步执行
    // var readMe = fs.readFileSync("readMe.txt", "utf8")

    //创建一个文件，给他写入helloworld
    // fs.writeFileSync("writeMe.txt", "hellow world")