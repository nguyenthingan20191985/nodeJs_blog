const express = require('express');
const router = express.Router();

const newsController= require('F:\\nodeJS\\src\\app/controllers\\NewsController');
// newsController.index
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
module.exports = router;
