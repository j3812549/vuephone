import src from './a'
console.log(src)
import './index.css'

// 热更新配置
if(module.hot){
    module.hot.accept()
    // module.hot.accept('./a.js', function(){
    //     let str = require('./a.js');
    //     document.getElementById('app').innerHTML = str
    // })
}