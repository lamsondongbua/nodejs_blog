var express = require('express');
const router = express.Router();

const magazineController = require('../app/controllers/MagazineController');

// magazineController.index;


//tạo mọi đường dẫn liên quan đến magazine
router.use('/:slug', magazineController.show);
router.use('/', magazineController.index);

module.exports = router;