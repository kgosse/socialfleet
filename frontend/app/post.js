angular.module('app').controller('Post', function($scope, $http, $location){

  var id = $location.search().id;


  $scope.minDate = new Date();

  $scope.time = new Date();

  $scope.opened = false;

  $scope.open = function($event){
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = !$scope.opened;
  };

  function getPost(){
    $http.get('/api/post/' + id).then(function(post){
      $scope.message = post.data.message;
      $scope.date = post.data.datetime;

      var datetime = new Date(post.data.datetime);

      $scope.time = datetime;
    })
  }

  if (isEditingPost())
  {
    getPost();
    $scope.save = editPost;
  }
  else
  {
    $scope.save = newPost;
  }

  function newPost(){

    var datetime = new Date(
      $scope.date.getFullYear(),
      $scope.date.getMonth(),
      $scope.date.getDate(),
      $scope.time.getHours(),
      $scope.time.getMinutes()
    );

    $http.post('/api/post/tweet', {
      message:  $scope.message,
      datetime: datetime
    }).then(function(){

    });
  }

  function editPost(){

    var datetime = new Date(
      $scope.date.getFullYear(),
      $scope.date.getMonth(),
      $scope.date.getDate(),
      $scope.time.getHours(),
      $scope.time.getMinutes()
    );

    $http.post('/api/post/update/' + id, {
      message:  $scope.message,
      datetime: datetime
    }).then(function(){

    });
  }

  function isEditingPost(){
    return id;
  }
});
