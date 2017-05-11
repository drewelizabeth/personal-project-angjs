angular.module('App').controller('loginCtrl', function ($scope, mainService, $state) {

      $scope.userObj = {};

      $scope.login = function (userObj) {
        console.log(userObj);
        mainService.login(userObj).then(function (response) {
            if (response.status == 200) {
              console.log("log in worked!");
              $state.go('friend');
            }
          })
        };

      })