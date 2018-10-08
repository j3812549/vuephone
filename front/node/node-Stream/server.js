    var fs = require('fs');
    
    //读文件
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');

    //写文件
    var myWriteStream = fs.createWriteStream(__dirname + '/writeME.txt');

    //管道方法 相当于 ls | grep app
    myReadStream.pipe(myWriteStream);

    // varwriteData = 'hello world';
    // myWriteStream.write(writeData, 'urf8');
    // myWriteStream.end();//结束写入
    // myWriteStream.on('finish', function() { //监听结束的方法
    //     console.log('finshed');
    // })


    // ---------------------------------------
    // myReadStream.setEncoding('utf8')

    // var data = ""
    
    // //监听接受数据函数
    // myReadStream.on('data', function(chunk) {
    //     //写入文件
    //     myWriteStream.write(chunk)
        
    //     //读文件赋值
    //     // data += chunk;
    // })

    // myReadStream.on('end', function() {
    //     // console.log(data);
    // })