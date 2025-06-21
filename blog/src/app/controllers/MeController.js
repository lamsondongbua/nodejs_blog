//liên kết model và controller
const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
//cấu hình các HTTP request : get, post, put, patch, delete cho magazine
class MeController  {
    //[GET] /me/stored/courses
    storedCourses(req,res,next){
        Course.find({})
            .then (courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(error => next(error));
    }
}   


module.exports = new MeController();