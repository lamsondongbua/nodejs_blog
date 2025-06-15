//cấu hình các HTTP request : get, post, put, patch, delete cho news
class NewsController  {
    
    //[GET] /news
    news(req,res) {
        return res.render('news');
    }
}   


module.exports = new NewsController;