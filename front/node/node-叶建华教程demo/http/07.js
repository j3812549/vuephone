let http  = require('http');
let url = require('url');
let querystring = require('querystring');
let formidable = require('formidable')
let util = require('util')
let uuidv1 = require('uuid/v1')
let fs = require('fs')
let path = require('path')

http.createServer((req, res) => {
    if (req.url === '/postmsg' && req.method.toLowerCase() === 'post') {
        // 1.实例化对象
        var form = new formidable.IncomingForm();

        // 2.设置上传的文件路径
        form.uploadDir = 'http/uploads'

        // 3.获取表单的内容
        form.parse(req, (err, fields, files) => {
            if (!err) {
            // 3.1生存随机的名称
            let name = uuidv1()
            console.log(name)
            
            // 3.2获取文件上传的后缀
            let extName = path.extname(files.photo.name)

            // 3.3设置路径
            // console.log(files.photo.path)
            let oldPahtName = files.photo.path.substring(files.photo.path.indexOf('http/'), files.photo.path.length)
            // console.log(__dirname + '/' + oldPahtName)
            let oldPath = oldPahtName;
            let newPath = __dirname + '/uploads/' + name + extName
            console.log(oldPath)
            console.log(newPath)
            
            // 3.4改名
            fs.rename(oldPath, newPath, (err) => {
                if (!err) {
                    res.writeHead(200, {'content-type': 'text/html;charset=UTF-8'});
                    res.write('写入成功')
                    res.end(util.inspect({fields: fields, files: files}))
                } else {
                    throw err
                }
            })
        
            } else {
                throw err
            }
            return
        })
    }
    // console.log(req.url)
    // console.log(req.method)
}).listen(80, '127.0.0.1')