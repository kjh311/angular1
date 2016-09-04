angular.module("myapp", [])

  .controller("Controller1", function($scope){
    $scope.myText="Kevin is the man!";
  })



  .controller("HelloController", function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
  });
