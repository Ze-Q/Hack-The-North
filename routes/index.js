var express = require('express');
var router = express.Router();


var sendgrid  = require('sendgrid')('g-cheng', 'HackTheNorth');

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

// email
router.post('/sendEmail', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var from = req.body.username;
    var to = req.body.useremail;

    console.log('button pressed');
    var payload   = {
	  to      :  to,
	  from    :  from,
	  subject : 'Saying Hi',
	  text    : 'This is my first email through SendGrid'
	}

	sendgrid.send(payload, function(err, json) {
	  if (err) { console.error(err); }
	  console.log(json);
	});

    res.location("/");
	res.redirect("/");
});

module.exports = router;
