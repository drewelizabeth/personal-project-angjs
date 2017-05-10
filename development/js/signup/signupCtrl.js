angular.module('App').controller('signupCtrl', function($scope, mainService) {
   $scope.test = 'signupCtrl works';
   $scope.newUser = {};

$scope.signup = function(newUser) {
  console.log('new user obj: ', newUser);
  mainService.newUser(newUser).then(function(response) {
    console.log(response);
  })
}



});