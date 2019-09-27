import 'babel-polyfill'
import '../../common/css/reset.css'
import '../../common/js/rem'
import '../less/index.less'

import service from '../../axios'

service({
  method: 'get',
  url: 'http://www.baidu.com'
}).then(res => {
  console.log(res)
})

// alert('333')

console.log('欢迎进入首页')
