angular.module("myapp", [])

  .controller("Controller1", function($scope){
    $scope.myText="Kevin is the man!";
    $scope.countries = "[{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]";
  })



  .controller("HelloController", function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
    $scope.student = {
      firstName: "Kevin",
      lastName: "Bad Mother Fucker",
      fees: 454,
      books: 299,
      subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65}
               ],

      fullName: function() {
        var studentObject;
        studentObject = $scope.student;
        return studentObject.firstName + " " + studentObject.lastName;
      }
    };
  });
