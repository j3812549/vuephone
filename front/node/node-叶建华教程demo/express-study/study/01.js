let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log(req.url)
    res.send('Hello world');
})

app.get('/html5', (req, res) => {
    console.log(req.url)
    res.send('Hello html5');
})

app.get('/it666/:name', (req, res) => {
    console.log(req.params.name)
    res.send('Hello it666');
})

app.listen(3000)