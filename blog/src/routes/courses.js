var express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// magazineController.index;


//tạo mọi đường dẫn liên quan đến magazine
router.get('/:slug', courseController.show);

module.exports = router;