angular.module("myapp", [])

  .controller("Controller1", function($scope){
    $scope.fuckityfuck = {};
    $scope.fuckityfuck.blah = "FuckityFuckFuckFuck";
    $scope.myText="Kevin is the man!";
  })



  .controller("HelloController", function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
  });
