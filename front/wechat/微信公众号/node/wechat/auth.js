const config = require('../config')
const sha1 = require('sha1')
const {getUserDataAsync, parentXMLAsync, formatMessage} = require('../utils/tool')

module.exports = () => {
    return async (req, res, next) => {
        const {signature, echostr, timestamp, nonce} = req.query;
        const {token} = config

        const sha1Str = sha1([timestamp, nonce, token].sort().join(''))

        /**
         * 1.GET请求
         * - 验证服务器的有效性
         * 2.POST请求
         * - 微信服务器会将用户发送的数据以POST请求的方式转发给开发者服务器上
         */
        if (req.method === 'GET') {
            if (sha1Str === signature) {
                res.send(echostr)
            } else {
                res.send('error')
            }
        } else if (req.method === 'POST') {
            if (sha1Str !== signature) {
                res.send('error')
            }
            
            // 接受请求体中的数据,流式数据
            const xmlData = await getUserDataAsync(req)
            // console.log(xmlData)
            /**
             * 
             * <xml>
                    <ToUserName><![CDATA[gh_cffc68b90bf6]]></ToUserName>
                    <FromUserName><![CDATA[oJNOY1H8rjBgJ0RyN_b-cznLee4s]]></FromUserName>
                    <CreateTime>1543945369</CreateTime>
                    <MsgType><![CDATA[text]]></MsgType>
                    <Content><![CDATA[123]]></Content>
                    <MsgId>6631194867095734384</MsgId>
                </xml>
             */
            // 将xml数据解析为js对象
            const jsData = await parentXMLAsync(xmlData)
            // 格式化数据
            const message = formatMessage(jsData)
            let content = '请输入有效答案'
            if (message.MsgType === 'text') {
                if (message.Content === '1') {
                    content = '你发送的是1'
                } else if (message.Content === '2') {
                    content = '你发送的是2'
                } else if (message.Content === '3') {
                    content = '你发送的是3'
                }
            }

            let replyMessage = `<xml>
                <ToUserName><![CDATA[${message.FromUserName}]]></ToUserName>
                <FromUserName><![CDATA[${message.ToUserName}]]></FromUserName>
                <CreateTime>${Date.now()}</CreateTime>
                <MsgType><![CDATA[text]]></MsgType>
                <Content><![CDATA[${content}]]></Content>
                <MsgId>${message.MegId}</MsgId>
            </xml>`

            // 返回响应给微信服务器
            res.send(replyMessage)

            // 如果开发者服务器没有返回响应给微信服务器，微信服务器会发送三次请求过来
            // res.end('')
        } else {
            res.send('error')
        }
    }
}
