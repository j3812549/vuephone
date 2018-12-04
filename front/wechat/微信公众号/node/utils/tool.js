// 引入xml2js, 将xml数据转换成js对象
const {parseString} = require('xml2js')
module.exports = {
    getUserDataAsync (req) {
        return new Promise((resolve, reject) => {
            let xmlData = ''
            req
                .on('data', data => {
                    xmlData += data.toString()
                })
                .on('end', () => {
                    // 数据接受完毕时，会触发当前事件
                  resolve(xmlData)  
                })
        })
    },
    parentXMLAsync (xmlData) {
        return new Promise((resolve, reject) => {
            parseString(xmlData, {trim: true}, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject('parentXMLAsync方法出了问题' + err)
                }
            })
        })
    },
    formatMessage (jsData) {
        let message = {}
        // 获取xml对象
        jsData = jsData.xml
        // 判断数据是否是一个对象
        if  (typeof jsData === 'object') {
            for(let key in jsData) {
                let value = jsData[key]
                message[key] = value[0]
            }
        }
        return message
    }
}