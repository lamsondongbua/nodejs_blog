var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


//tạo đường dẫn liên quan đến home và search
router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;