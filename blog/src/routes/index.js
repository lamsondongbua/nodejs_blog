const magazineRouter = require('./magazine');
const siteRouter = require('./site');

function route(app) {
  
  
  //   app.get('/magazine', (req, res) => {
    //     return res.render('magazine');
    //   })
    
    app.use('/magazine', magazineRouter)
      
    //Tạo ví dụ query parameter
    // app.get('/search', (req,res) => {
      //   //xem query trong object request (chỉ dùng với get mới có .query)
      //   console.log(req.query);
      //   return res.render('search');
      // });
      
      
      
      // Tạo phương thức post cho trang search
      app.post('/search', (req,res) => {
        console.log(req.body); // kiểm tra keyword từ form (chỉ áp dụng với post mới có .body)
        res.send(`Form submitted with keyword: ${req.body.q}`);
      });


      // app.get('/', (req, res) => {
      //     return res.render('home');
      //   })

      // Dùng GET cho cả /search và GET /
      app.use('/', siteRouter);
    }
    
    module.exports = route;