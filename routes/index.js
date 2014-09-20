var express = require('express');
var router = express.Router();


var sendgrid  = require('sendgrid')('g-cheng', 'HackTheNorth');
var client = require('twilio')('AC903fd090648a45c704722192d1a383a6', '253139bb91c20b8238ac1eb6b77ab917');

var Bitly = require('bitly');
var bitly = new Bitly('o_5cp9d20atc', 'R_515e9e49f6c24e4fb482a67d39779185');

/* GET recording page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET video page. */
router.get('/video', function(req, res) {
	res.render('video', {
	    "token" : req.query.token
	});
});

// email
router.post('/submit', function(req, res) {

	sendEmail(req, res);
	sendSms(req, res);

    res.location("/");
	res.redirect("/");
});

function parseEmailList(str) {
	var list = str.split(';');
	return list;
}

function sendEmail (req, res) {
    // Get our form values. These rely on the "name" attributes
    var from = req.body.username;
    var to = parseEmailList(req.body.useremail);
    var token = req.body.tokenId;

	var long_url = 'http://quickvid.me/' + '/video?token=' + token;

	bitly.shorten(long_url, function(err, response) {
	  	if (err) throw err;

	  // See http://code.google.com/p/bitly-api/wiki/ApiDocumentation for format of returned object
		console.log(response.data.url);

		var short_url = response.data.url

	    console.log('button pressed with token', token);

		var payload   = {
		  to      :  to,
		  from    :  from,
		  subject : 'A video has been sent to you!',
		  text    : 'Please refer the following link: \n' + short_url
		}

		sendgrid.send(payload, function(err, json) {
		  if (err) { console.error(err); }
		  console.log(json);
		});

	});

    res.location("/");
	res.redirect("/");

}

function sendSms (req, res) {
	var to = req.body.number;
	var token = req.body.tokenId;
    var long_url = 'http://quickvid.me/' + '/video?token=' + token;

    bitly.shorten(long_url, function(err, response) {
	    if (err) throw err;

	  // See http://code.google.com/p/bitly-api/wiki/ApiDocumentation for format of returned object
		console.log(response.data.url);

		short_url = response.data.url

	    console.log('button pressed with token', token);

		client.sendSms({
		    to: to,
		    from:'13658000595',
		    body:short_url
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
	});
}

module.exports = router;
