var category = require('./category.js');
var express = require('express');
var router = express.Router();

router.use('/category', category);
// router.use('/user', require('./user.js'));
// router.use('/memo', require('./user.js'));

module.exports = router;