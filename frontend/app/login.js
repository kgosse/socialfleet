/**
 * Created by kevin gosse on 06/10/2015.
 */

angular.module('app').controller('Login', function($scope, $auth, $http){
  $scope.login = function(){
    $auth.authenticate('twitter');
  };

  $scope.tweet = function(){
    $http.get('/api/user/test');
  }
});
