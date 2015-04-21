var unirest = require('unirest');
var apiVersion = 1;

module.exports = function (searchQuery, callback) {
    var data;
    var apiRequest = unirest.get('http://www.splashbase.co/api/v' + apiVersion + '/images/search?query=' + searchQuery)
        .as.json(function (response) {
            data = response.body.images;
            return callback(data);
        });
};