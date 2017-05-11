angular.module('App').directive('checkIn', function () {
  return {
    restrict: 'E',
    templateUrl: './../../views/momCheckin.html',
    controller: function ($scope, mainService) {
      $scope.conditions = [
        'single parenting',
        'infertility',
        'miscarriage',
        'breastfeeding',
        'formula feeding',
        'being stay-at-home-mom',
        'being working mom',
        'postpartum depression',
        'hyperemesis',
        'multiples',
        'special needs child'
      ];
      $scope.checkin = [];
      $scope.checked = function (condition) {
        if ($scope.checkin.indexOf(condition) === -1) {
          $scope.checkin.push(condition)
          console.log($scope.checkin)
          mainService.connectFriends($scope.checkin);
        } else {
          $scope.checkin.splice($scope.checkin.indexOf(condition), 1)
          console.log($scope.checkin)
          if ($scope.checkin.length !== 0) {
            mainService.connectFriends($scope.checkin);
          } else {
            // clear out array friends so none display
          }
        }
      }

    }
  }
})