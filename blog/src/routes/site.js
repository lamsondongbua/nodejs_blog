var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


//tạo đường dẫn liên quan đến home và search
router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;