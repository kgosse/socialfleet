/**
 * Created by kevin gosse on 03/10/2015.
 */

angular.module('app', ['satellizer'])
  .config(function($authProvider){
    $authProvider.twitter({
      url: '/api/user/login'
    })
  });
