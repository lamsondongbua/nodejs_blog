//liên kết model và controller
const Course = require('../models/Course');
//import file chuyển data document bên mongo thành object để render giao diện
const {multipleMongooseToObject} = require('../../util/mongoose');
//cấu hình các HTTP request : get, post, put, patch, delete cho magazine
class SiteController  {
    
    //[GET] /
    home(req,res, next) {
        //lấy dữ liệu từ db : sử dụng callback
        // Course.find({}, function(err, courses){
        //     if (!err) {
        //         res.json(courses);
        //     }
        //     else{
        //         res.status(400).json({error: "ERROR!!"})
        //     }
        // })

        // lấy dữ liệu từ db: sử dụng promise và render ra home
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(error => next(error));
        
        // return res.render('home');
    }

    // [GET] /search
    search(req,res){
        return res.render('search');
    }
}   


module.exports = new SiteController;