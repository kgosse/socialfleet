/**
 * Created by kevin gosse on 03/10/2015.
 */

angular.module('app', ['satellizer', 'ui.bootstrap'])
  .config(function($authProvider){
    $authProvider.twitter({
      url: '/api/user/login',
      authorizationEndpoint: 'https://api.twitter.com/oauth/authorize'
    })
  });
