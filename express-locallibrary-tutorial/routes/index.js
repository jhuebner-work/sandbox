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
    var options = {
        method: 'GET',
        uri: 'http://www.google.com',
        resolveWithFullResponse: true    //  <---  <---  <---  <---
    };

    rp(options).then(function(response) {
            console.log('respPromise.response:', response); // Print the HTML for the Google homepage.
            console.log('respPromise.response.statusCode:', response.statusCode); // Print the response status code if a response was received
            message = response.statusCode;
            res.render('index', { title: message });
        }).catch (
        function(response) {
            console.log('error:');
            res.render('index', { title: 'error'+response});
        });


});

module.exports = router;
