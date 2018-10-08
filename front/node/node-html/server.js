    var http = require('http');
    var fs = require('fs');//引入读写文件的能力
    
    var server = http.createServer(function(request,response){
        console.log('Request received');
        response.writeHead(200, { 'Content-Type': 'text/html'});
        // var htmlfile = '这里写html代码',也可以直接输出文件
        var myReadStream = fs.createReadStream(_direname + '/index.html', 'utf8');
        response.end(myReadStream.pipe(response));
    })

    server.listen(3000, '127.0.0.1');
    console.log('Server 我是3000端口');