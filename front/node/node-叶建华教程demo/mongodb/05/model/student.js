var mongoose = require('mongoose');
var StudentSchema = require('../schemas/student');

/*通过model编译模式为模型*/
var Student = mongoose.model('student', StudentSchema);

StudentSchema.static = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt') //按更新的时间排序
    },
    findStudentWithClass: function (cb) {
        return this
            .find({})
            .populate('classId')//注意这是联合查询的关键
            .sort('meta.updateAt')
            .exec(cb)
    }
}

/*导出Student模型 模块*/
module.exports = Student;
