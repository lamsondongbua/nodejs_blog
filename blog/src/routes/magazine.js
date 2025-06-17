var express = require('express');
const router = express.Router();

const magazineController = require('../app/controllers/MagazineController');

// magazineController.index;


//tạo mọi đường dẫn liên quan đến magazine
router.get('/:slug', magazineController.show);
router.get('/', magazineController.index);

module.exports = router;