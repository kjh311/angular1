angular.module("myapp", [])

  .controller("Controller1", function($scope){
    $scope.myText="Kevin is the man!";
    $scope.countries = "[{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]";
  })



  .controller("HelloController", function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
  });
