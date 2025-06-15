const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
//@ts-ignore
//express trả về đối tượng app để xây dựng website
const app = express();
//chạy ở cổng nào?
const port = 3002;

const route = require('./routes');

//đây là dòng xử lí form data qua thư viện body-parser của express trước khi post
app.use(express.urlencoded({ extended: true }));


//public là nơi lưu các tài nguyên tĩnh như ảnh, CSS ... nên mặc định chỉ cần khai báo public là lấy đc
app.use(express.static(path.join(__dirname,'public')));

//sử dụng morgan lấy HTTP logger
app.use(morgan('combined'));

//Ví dụ về template-engine : handlebars
app.engine('handlebars',handlebars());
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
  console.log(`Example app listening on port http://localhost:${port}`)
});