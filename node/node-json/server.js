    var http = require('http');
    
    var server = http.createServer(function(request,response){
        console.log('Request received');
        response.writeHead(200, { 'Content-Type': 'application/json'});
        var obj = {
            name: '我是名字哦',
            age: 29
        }
        response.end(JSON.stringify(obj));
    })

    server.listen(3000);
    console.log('Server 我是3000端口');