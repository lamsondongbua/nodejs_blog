var express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');


//tạo mọi đường dẫn liên quan đến news
router.get('/', newsController.news);

module.exports = router;