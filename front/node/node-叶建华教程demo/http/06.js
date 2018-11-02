let http  = require('http');
let url = require('url');
let querystring = require('querystring');
let formidable = require('formidable')
let util = require('util')

http.createServer((req, res) => {
    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {
        // 1.实例化对象
        let form = new formidable.IncomingForm();

        // 2.设置上传的文件路径
        form.uploadDir = "./uploads"

        // 3.获取表单的内容
        form.parse(req, (err, fields, files) => {
            console.log(files)
            console.log(fields)
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.write('received upload: \n\n');
            res.end(util.inspect({fields: fields, files: files}))
        })
    }
    // console.log(req.url)
    // console.log(req.method)
}).listen(80, '127.0.0.1')