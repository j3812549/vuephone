let http = require('http');
let url = require('url');

http.createServer((req, res) => {
    let myUrl = url.parse(req.url, true) //传了true后才会成对象
    let queryObj = myUrl.query
    console.log(queryObj)
    res.end('德莉莎世界第一可爱');
}).listen(80, '127.0.0.1')