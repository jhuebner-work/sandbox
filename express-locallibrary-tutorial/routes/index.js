var request = require('request');
var rp = require('request-promise');
var express = require('express');
var router = express.Router();

var message = "no message";

/* GET home page. *
function myCallback(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:',  response.statusCode); // Print the response status code if a response was received
    message = response.statusCode;
    message = "inside";
    console.log('body:', body); // Print the HTML for the Google homepage.
    console.log('message:', message); // Print the HTML for the Google homepage.
}*/

router.get('/', function(req, res, next) {
    var message = req["query"]["jh6p"];
    console.log(message);
    res.render('index', { title: message});
});

module.exports = router;
