var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
router.get('/status', function(req, res, next) {
  res.render('status', { title: 'Ethereum Status Page' });
});

module.exports = router;