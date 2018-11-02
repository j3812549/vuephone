let http =require('http');
let fs = require('fs');

// 创建服务器
let server = http.createServer((req, res) => {
    if (req.url === '/test1.html') {
        fs.readFile('http/test1.html', (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(data)
            } else {
                throw err
            }
        })
    } else if (req.url === '/test2.html') {
        fs.readFile('http/test2.html', (err, data) => {
            if (!err) {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(data)
            } else {
                throw err
            }
        })
    } else if (req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
        res.end('hello world')
    } else {
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
        res.end('德莉莎世界第一可爱')
    }
})

// 监听
server.listen(80, '127.0.0.1');
