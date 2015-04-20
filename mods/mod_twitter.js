var unirest = require('unirest');
var keys = require('../bubbles.json');
var apiVersion = 1.1;

module.exports = function (searchQuery, callback) {
    var data;
    var apiRequest = unirest.get('https://api.twitter.com/' + apiVersion + '/search/tweets.json?q=' + searchQuery)
        .oauth({
            consumer_key: keys.twitter.consumerKey,
            consumer_secret: keys.twitter.consumerSecret,
            token: keys.twitter.accessToken,
            token_secret: keys.twitter.accessSecret
        })
        .as.json(function (response) {
            data = response.body.statuses;
            return callback(data);
        });
};