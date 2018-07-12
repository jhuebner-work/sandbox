var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
    var message = "no message";
    var resp = request('http://www.google.com?q=test', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received
        message = response.statusCode;
        message = "inside";
        console.log('body:', body); // Print the HTML for the Google homepage.
        console.log('message:', message); // Print the HTML for the Google homepage.
    });
    console.log('resp:', resp); // Print the HTML for the Google homepage.
    console.log('statusCode2:',  resp.statusCode); // Print the response status code if a response was received

    res.render('index', { title: message });
});

module.exports = router;
