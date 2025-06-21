var express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// magazineController.index;

router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/repository', courseController.repository);
router.get('/:slug', courseController.show);


module.exports = router;