//liên kết model và controller
const Course = require('../models/Course');
//import file chuyển data document bên mongo thành object để render giao diện
const {mongooseToObject} = require('../../util/mongoose');
//cấu hình các HTTP request : get, post, put, patch, delete cho magazine
class CourseController  {
    //[GET]  /courses/:slug
    show(req,res,next){
        //cách lấy giá trị biến động slug trên URL : req.params.slug
        Course.findOne({slug : req.params.slug})
            .then((course) => {
                return res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next);

    }
}   


module.exports = new CourseController;