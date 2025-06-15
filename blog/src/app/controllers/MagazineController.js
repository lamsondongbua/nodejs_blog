//cấu hình các HTTP request : get, post, put, patch, delete cho magazine
class MagazineController  {
    
    //[GET] /magazine
    index(req,res) {
        return res.render('magazine');
    }

    // [GET] /magazine/:slug (slug là biến động, nhận nhiều giá trị ngẫu nhiên)
    show(req,res){
        return res.send('EXAMPLE FOR SLUG')
    }
}   


module.exports = new MagazineController;