var express = require('express');
var router = express.Router();
var twitter = require('../mods/mod_twitter');
var instagram = require('../mods/mod_instagram');
var splashbase = require('../mods/mod_splashbase');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'bubblr'});
});

router.get('/search', function(req, res, next) {
    res.render('results', {title: 'bubblr'});
});

router.post('/search', function (req, res, next) {
    var searchQuery = req.body.searchQuery.trim();
    var resultData = [];
    if (isBlank(searchQuery) || searchQuery.isEmpty() || isEmpty(searchQuery)) {
        res.render('results', {title: 'bubblr', noData: 'You did not search for anything! '});
    } else {
        twitter(searchQuery, function (twitterData) {
            if (twitterData !== null) {
                resultData.push(twitterData);
            }
            instagram(searchQuery, function (instagramData) {
                if (instagramData !== null) {
                    resultData.push(instagramData);
                }
                splashbase(searchQuery, function(splashbaseData) {
                    if (splashbaseData !== null) {
                        resultData.push(splashbaseData);
                    }
                    res.render('results', {
                        title: 'bubblr',
                        theSearchQuery: searchQuery,
                        result: resultData,
                        getOriginal: getOriginal
                    });
                });
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
