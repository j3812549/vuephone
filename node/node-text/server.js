    var http = require('http');
    
    var server = http.createServer(function(request,response){
        console.log('Request received');
        response.writeHead(200, { 'Content-Type': 'text/plain'});
        response.end('啦啦啦啦啦，我是快乐的小文本');
    })

    server.listen(3000);
    console.log('Server 我是3000端口');