/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Twit = require('twit');
var config = require('../services/config');

module.exports = {
  tweet: function(req, next){

    var T = new Twit({
      consumer_key:        config.TWITTER_KEY,
      consumer_secret:     config.TWITTER_SECRET,
      access_token:         '2469329515-29ZjcbfnuK7M5Ym8Jcrj5WZ1bkQ8gIbQKipVii4',
      access_token_secret:  '0UXL2C3Eb9skXIfu4U8XpmGbubHTNUQadwwPsNnHC5C3D'
    });

    T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
      console.log(data, err);
    });
  }
};

