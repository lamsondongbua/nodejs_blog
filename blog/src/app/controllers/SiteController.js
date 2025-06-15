//cấu hình các HTTP request : get, post, put, patch, delete cho magazine
class SiteController  {
    
    //[GET] /
    home(req,res) {
        return res.render('home');
    }

    // [GET] /search
    search(req,res){
        return res.render('search');
    }
}   


module.exports = new SiteController;