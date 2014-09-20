var express = require('express');
var router = express.Router();


var sendgrid  = require('sendgrid')('g-cheng', 'HackTheNorth');
var client = require('twilio')('AC903fd090648a45c704722192d1a383a6', '253139bb91c20b8238ac1eb6b77ab917');

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
router.post('/submit', function(req, res) {

    // Get our form values. These rely on the "name" attributes
   /* var fromEmail = req.body.username;
    var toEmail = req.body.useremail;
	var toNumber = req.body.number;

    var token = req.body.tokenId;

    var videoLink = 'http://quickvid.herokuapp.com' + '/video?token=' + token;

    var payload   = {
	  to      :  toEmail,
	  from    :  fromEmail,
	  subject : 'A video has been sent to you!',
	  text    : 'Please refer the following link: \n' + videoLink
	}

	sendgrid.send(payload, function(err, json) {
	  if (err) { console.error(err); }
	  console.log(json);
	});
*/
	sendEmail(req, res);
	sendSms(req, res);

    res.location("/");
	res.redirect("/");
});

function sendEmail (req, res) {

    // Get our form values. These rely on the "name" attributes
    var from = req.body.username;
    var to = req.body.useremail;
    var token = req.body.tokenId;

    var videoLink = 'http://quickvid.herokuapp.com' + '/video?token=' + token;
    console.log('button pressed with token', token);

    var payload   = {
	  to      :  to,
	  from    :  from,
	  subject : 'A video has been sent to you!',
	  text    : 'Please refer the following link: \n' + videoLink
	}

	sendgrid.send(payload, function(err, json) {
	  if (err) { console.error(err); }
	  console.log(json);
	});

    res.location("/");
	res.redirect("/");
}

function sendSms (req, res) {

	var to = req.body.number;
	var token = req.body.tokenId;
    var videoLink = 'http://quickvid.herokuapp.com' + '/video?token=' + token;

	client.sendSms({
	    to: to,
	    from:'13658000595',
	    body:videoLink
	    }, 
	    function(error, message) {
	        if (!error) {
	            console.log('Success! The SID for this SMS message is:');
	            console.log(message.sid);
	            console.log('Message sent on:');
	            console.log(message.dateCreated);
	        } else {
	            console.log('Oops! There was an error.', error);
	        }
	});

}


module.exports = router;
