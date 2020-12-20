const express = require('express');
const router = express.Router();

const siteController = require('F:\\nodeJS\\src\\app/controllers\\SiteController');
// newsController.index
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
