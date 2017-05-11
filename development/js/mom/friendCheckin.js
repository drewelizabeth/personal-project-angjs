angular.module('App').directive('friendCheckin', function () {
  return {
    restrict: 'E',
    templateUrl: './../../views/friendCheckin.html',
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

$scope.connect = [];
      $scope.checked = function (condition) {
        if ($scope.connect.indexOf(condition) === -1) {
          $scope.connect.push(condition)
          console.log($scope.connect)
          mainService.initialConnect($scope.connect);
        } else {
          $scope.connect.splice($scope.connect.indexOf(condition), 1)
          console.log($scope.connect)
          if ($scope.connect.length !== 0) {
            mainService.initialConnect($scope.connect);
          } else {
            // clear out array friends so none display
          }
        }
      }

    }
  }
})