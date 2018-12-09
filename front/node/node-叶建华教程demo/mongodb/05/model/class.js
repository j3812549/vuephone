var mongoose = require('mongoose');
var ClassSchema = require('../schemas/class');

/*通过model编译模式为模型*/
var Class = mongoose.model('class', ClassSchema);

StudentSchema.static('fetch', function (cb) {
    return this
        .find({}, cb)
        .sort('meta.updateAt')
})

/*导出Class模型 模块*/
module.exports = Class;
