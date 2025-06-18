var express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// magazineController.index;


//tạo mọi đường dẫn liên quan đến magazine
router.get('/create', courseController.create);
router.post('/repository', courseController.repository);
router.get('/:slug', courseController.show);

module.exports = router;