var express = require('express');
var router = express.Router();

/* GET recording page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QuickVid' });
});

/* GET video page. */
router.get('/video', function(req, res) {
	res.render('video', {
	    "token" : req.query.token
	});
});

module.exports = router;
