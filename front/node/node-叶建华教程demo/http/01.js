let http =require('http');

// 创建服务器
let server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
    res.write('hello world')
    res.write('<h1 style="color:red">德莉莎世界第一可爱！！！</h1>')
    res.end('德莉莎世界第一可爱')
})

// 监听
server.listen(80, '127.0.0.1');
