const express = require('express')
//express trả về đối tượng app để xây dựng website
const app = express()
//chạy ở cổng nào?
const port = 3000


//tạo route (đường đi) -> thay đổi được qua dấu / (localhost:3000/tin-tuc)
app.get('/tin-tuc', (req, res) => {
  return res.send('Hello World!')
})

//lắng nghe và tạo port , truyền port vào localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})