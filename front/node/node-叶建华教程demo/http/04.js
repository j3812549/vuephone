let http  = require('http');
let url = require('url');
let querystring = require('querystring');

http.createServer((req, res) => {
    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {
        // console.log('获取到post请求')
        
        // 1.变量
        let allData = '';
        
        // 2.监听传过来的数据
        req.on('data', (buf) => {
            allData += buf;
        })
        
        // 3.监听所有的数据都传递完毕
        req.once('end', () => {
            // console.log(allData)
            res.end('OK');
            let dataObj = querystring.parse(allData);
            console.log(dataObj)
        })
    }
    // console.log(req.url)
    // console.log(req.method)
}).listen(80, '127.0.0.1')