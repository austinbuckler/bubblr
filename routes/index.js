var express = require('express');
var router = express.Router();
var twitter = require('../mods/mod_twitter');
var instagram = require('../mods/mod_instagram');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'bubblr'});
});

router.get('/search', function(req, res, next) {
    res.render('results', {title: 'bubblr'});
});

router.post('/search', function (req, res, next) {
    var searchQuery = req.body.searchQuery;
    if (isBlank(searchQuery) || searchQuery.isEmpty() || isEmpty(searchQuery)) {
        res.render('results', {title: 'bubblr', noData: 'You did not search for anything! '});
    } else {
        twitter(searchQuery, function (twitterData) {
            instagram(searchQuery, function (instagramData) {
                res.render('results', {title: 'bubblr', twitterData: twitterData, getOriginal:getOriginal, instagramData: instagramData});
                //res.send('You searched... ' + searchQuery + '<br/>' +
                //'and received:' +
                //'<br/> ' + twitterData[0].text + '' +
                //'as well as ' +
                //'<br/>' +
                //'<img src=' + instagramData[0].images.low_resolution.url + ' alt="" />');
            });
        });
    }
});

function getOriginal(str) {
    return str.replace('_normal', '');
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function isEmpty(str) {
    return (!str || 0 === str.length);
}

module.exports = router;
