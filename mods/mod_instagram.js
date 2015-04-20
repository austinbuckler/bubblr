var unirest = require('unirest');
var keys = require('../bubbles.json');
var apiVersion = 1;

module.exports = function (searchQuery, callback) {
    var data;
    var apiRequest = unirest.get(
        'https://api.instagram.com/v1/tags/' + searchQuery +
        '/media/recent?client_id=' + keys.instagram.clientId)
        .as.json(function (response) {
            data = response.body.data;
            return callback(data);
        });
};