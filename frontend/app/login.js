/**
 * Created by kevin gosse on 06/10/2015.
 */

angular.module('app').controller('Login', function($scope){
  $scope.login = function(){
    console.log('login');
  };

  $scope.tweet = function(){
    console.log('tweet');
  }
});
