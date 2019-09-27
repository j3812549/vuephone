/* eslint-disable no-undef */
import axios from 'axios'

// 设置axios对象
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000
})

// 拦截request请求
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 拦截response响应
service.interceptors.response.use(
  response => {
    return response
  },

  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
