var express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// magazineController.index;


//tạo mọi đường dẫn liên quan đến magazine
router.get('/stored/courses', meController.storedCourses);

module.exports = router;