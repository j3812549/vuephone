const config = require('../config')
const sha1 = require('sha1')

module.exports = () => {
    return (req, res) => {
        const {signature, echostr, timestamp, nonce} = req.query;
        const {token} = config
    
        const arr = [timestamp, nonce, token];
        const arrSort = arr.sort();
        console.log(arrSort)
        const str = arr.join('');
        const sha1Str = sha1(str);
        if (sha1Str === signature) {
            res.send(echostr)
        } else {
            res.send('error')
        }
    }
}
