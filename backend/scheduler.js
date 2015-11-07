var sails = require("sails");
var Twit = require('twit');

sails.load(function(){
  setInterval(function(){
    checkPosts();
  }, config.scheduledInterval);
});

function checkPosts(){
  Post.find().where({
    scheduledfor: {
      '<': new Date()
    },
    isPosted: false
  }).populate('owner')
    .exec(function(err, posts){
      console.log(posts);
      posts.forEach(function(post){
        var token = post.owner.twitterToken;
        var secret = post.owner.message;
        sendTweet(token, secret, post.message, function(){
          updateSentPost(post);
        });
      });
    });
}

function sendTweet(token, secret, message, cb){
  var T = new Twit({
    consumer_key:        config.TWITTER_KEY,
    consumer_secret:     config.TWITTER_SECRET,
    access_token:        token,
    access_token_secret: secret
  });

  T.post('statuses/update', {
    status: message
  }, function(err, data, response) {
    console.log("sent successfully", err);
    cb();
  });
}

function updateSentPost(post){
  post.isPosted = true;
  post.save(function(){
    console.log("post updated");
  });
}
