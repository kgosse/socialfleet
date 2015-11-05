/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Twit = require('twit');
var config = require('../services/config');

module.exports = {
  tweet: function(req, res){

    User.findOne(req.userId, function(err, user){

      var message = req.body.message;

      var T = new Twit({
        consumer_key:        config.TWITTER_KEY,
        consumer_secret:     config.TWITTER_SECRET,
        access_token:        user.twitterToken,
        access_token_secret: user.twitterSecret
      });

      T.post('statuses/update', {
        status: message
      }, function(err, data, response) {
        console.log(data, err);
        res.status(200).end();
      });
    });
  }
};

