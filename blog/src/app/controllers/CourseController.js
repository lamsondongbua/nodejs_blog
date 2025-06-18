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
    // [GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }
    // [POST] /courses/repository
    repository(req,res,next){
        // res.json(req.body);

        //thêm image
        const formData = req.body;
        formData.image = 'https://taec.edu.vn/wp-content/uploads/2023/08/1-Toeic-800-1-lo-trinh-01-01.jpg'
        
        //Cách đưa form data của phương thức POST vào DB
        const course = new Course(formData);
        course.save()
            //chuyển hướng sang trang chi tiết khóa học
            .then(() => res.redirect(`/`))
            .catch(error => {
                
            })
    }
}   


module.exports = new CourseController;