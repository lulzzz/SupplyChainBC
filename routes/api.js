var express = require('express');
var router = express.Router();
var statusController = require('../controllers/statusController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Calling the main API function'} );
});
router.get('/status', function(req, res, next) {
  res.json({ message: statusController.message } );
});
router.get('/status/isConnected', function(req, res, next) {
  res.json({ Online: statusController.isApplicationConnected() } );
});

module.exports = router;