/**
 * Created by kevin gosse on 03/10/2015.
 */

angular.module('app', ['satellizer', 'ui.bootstrap', 'ui.router'])
  .config(function($authProvider, $stateProvider){
    $authProvider.twitter({
      url: '/api/user/login',
      authorizationEndpoint: 'https://api.twitter.com/oauth/authorize'
    });

    $stateProvider.state('posts', {
      url: '/',
      templateUrl: 'myposts.html',
      controller: 'MyPosts'
    }).state('post', {
      url: '/post?id',
      templateUrl: 'post.html',
      controller: 'Post'
    })
  });
