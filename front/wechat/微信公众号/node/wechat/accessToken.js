const { appId, appsecret } = require('../config')

const rp = require('request-promise-native')

const { writeFile, readFile } = require('fs')

// 获取access_token
class Wechat {
    constructor() {

    }

    /**
     * 用来获取access_token
     */
    getAccessToken() {
        // 定义请求的地址
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appsecret}`
        /**
         * 发送请求 
         * 依赖 request request-promise-native
         * 返回值为promise对象
         */
        return new Promise((resolve, reject) => {
            rp({ method: 'GET', url, json: true })
                .then(res => {
                    res.expires_in = Date.now() + (res.expires_in - 300) * 1000
                    resolve(res)
                })
                .catch(err => {
                    console.log(err)
                    reject('getAccessToken出了问题' + err)
                })
        })
    }

    /**
     * 用来保存access_token
     * @param accessToken 要保存的凭据
     */
    saveAccessToken(accessToken) {
        accessToken = JSON.stringify(accessToken);
        return new Promise((resolve, reject) => {
            writeFile(',/accessToken.txt', accessToken, err => {
                if (!err) {
                    console.log('文件保存成功');
                    resolve()
                } else {
                    reject('saveAccessToken方法出了问题' + err)
                }
            })
        })
    }
    /**
     * 用来读取access_token
     */
    readAccessToken() {
        return new Promise((resolve, reject) => {
            readFile(',/accessToken.txt', (err, data) => {
                if (!err) {
                    data = JSON.parse(data)
                    console.log('文件读取成功');
                    resolve(data)
                } else {
                    reject('readAccessToken方法出了问题' + err)
                }
            })
        })
    }
    /**
     * 判断accesstoken是否有效
     * @param accessToken
     */
    isValidAccessToken(accessToken) {
        if (!data && !data.access_token && !data.expires_in) {
            return false
        }
        return data.expires_in > Date.now()
    }
    /**
     * 用来获取没有过期的access_token
     * @return {Promise<any>} access_token
     */
    fetchAccessToken() {
        if (this.access_token && this.expires_in && this.isValidAccessToken(this)) {
            // 说明之前保存过access_token 并且有效，可以直接使用
            return Promise.resolve({
                accessToken: this.access_token,
                expires_in: this. expires_in
            })
        }
        return new Promise((resolve, reject) => {
            this.readAccessToken()
                .then(async res => {
                    if (this.isValidAccessToken(res)) {
                        return Promise.resolve(res)
                    } else {
                        const res = await this.getAccessToken()
                        await this.saveAccessToken(res)
                        return Promise.resolve(res)
                    }
                })
                .catch(async err => {
                    const res = await this.getAccessToken()
                    await this.saveAccessToken(res)
                    return Promise.resolve(res)
                })
                .then(res => {
                    // 将access_token挂载到this上
                    this.access_token = req.access_token
                    this.expires_in = res.expires_in
                    // 返回res包装了一层promise对象（此对象为成功的状态）
                    return Promise.resolve(res)
                })
        })
    }
}
