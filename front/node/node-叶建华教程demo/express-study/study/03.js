let express = require('express');
let app = express();

app.get('/', (req, res) => {
    // res.send('我的妈呀')
    // res.send({name: '小萝莉', age: 14})
    // res.send('<h1>小萝莉最棒了！！！</h1>')
    // res.status(404).send('错误的请求')

    res.write('白丝小萝莉最棒了');
    res.write('哇哈哈哈哈');
    res.end('德莉莎世界第一可爱')
});

app.get('/:name/:age', (req, res) => {
    let name = req.params['name']
    let name = req.params['age']
    res.end(name)
});

app.listen(3000)
