const mongoose = require("mongoose")
//thư viện tự động tạo slug 
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const Course = new Schema({
    name: {type: String, default: '', maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 200},
    videoId : {type: String, default: ''},
    level: {type: String, default: ''},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true})

module.exports = mongoose.model('Course', Course)

//Chúng ta nên lấy id đưa vào slug thay vì name bởi nhỡ đâu, bất chợt có 2 KHÓA HỌC CÙNG TÊN thì sao ???