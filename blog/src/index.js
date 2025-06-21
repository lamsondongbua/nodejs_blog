//tạo biến thiết lập đường 
const path = require('path');
//tạo biến sử dụng thư viện express
const express = require('express');
//tạo biến sử dụng thư viện morgan
const morgan = require('morgan');
//tạo biến sử dụng thư viện express-handlebars
const handlebars = require('express-handlebars');
//@ts-ignore

const methodOverride = require('method-override');

//express trả về đối tượng app để xây dựng website
const app = express();
//chạy ở cổng nào?
const port = 3002;
//tạo biến để sử dụng route
const route = require('./routes');
//tạo biến để sử dụng kết nối db
const db = require('./config/db')

//Connect to DB
db.connect();

//đây là dòng xử lí form data qua thư viện body-parser của express trước khi post
app.use(express.urlencoded({ extended: true }));


//public là nơi lưu các tài nguyên tĩnh như ảnh, CSS ... nên mặc định chỉ cần khai báo public là lấy đc
app.use(express.static(path.join(__dirname,'public')));

//sử dụng morgan lấy HTTP logger
app.use(morgan('combined'));

//do form update ko hỗ trợ method = "PUT" nên ta sử dụng thư viện này để  chuyển đổi từ POST ghi đè sang PUT khi update
app.use(methodOverride('_method'));

//Ví dụ về template-engine : handlebars
app.engine('handlebars',
  handlebars({
    helpers: {
      sum: (a,b) => a+ b
    }
  }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// //tạo route (đường đi) -> thay đổi được qua dấu / (localhost:3000/tin-tuc)
// app.get('/tin-tuc', (req, res) => {
//   return res.send('Hello World!')
// });




//Cấu hình route
route(app);



//lắng nghe và tạo port , truyền port vào localhost
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});