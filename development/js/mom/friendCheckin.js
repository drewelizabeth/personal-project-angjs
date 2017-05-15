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

      $scope.connectfr = [];

      
      
      $scope.checked2 = function (condition) {
        console.log('input conditions', condition);
        console.log('before' + $scope.connectfr);
        if ($scope.connectfr.indexOf(condition) === -1) {
          $scope.connectfr.push(condition);
          console.log($scope.connectfr);
        } else {
          $scope.connectfr.splice($scope.connectfr.indexOf(condition), 1)
          console.log($scope.connectfr)
          // if ($scope.connectfr.length !== 0) {
          //   mainService.initialConnect($scope.connectfr);
          // } else {
          //   // clear out array of friends so none display
          // }
        }
      }

      $scope.checkedfr = function(condition) {
        // console.log($scope.connectfr);
        // mainService.friendUpdate($scope.connectfr);
        $scope.connectfr = [];
        // $('input[type="checkbox"]:checked').prop('checked',false);
      
      }

    }
  }


})