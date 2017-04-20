var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/status', function(req, res, next) {
  res.render('status');
});

module.exports = router;
