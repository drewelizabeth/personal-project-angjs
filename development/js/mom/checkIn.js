angular.module('App').directive('checkIn', function () {
  return {
    restrict: 'E',
    templateUrl: './../../views/momCheckin.html',
    controller: function ($scope, mainService) {
      $scope.conditions = [
        'single parent',
        'infertility',
        'miscarriage',
        'breastfeeding',
        'formula feeding',
        'stay at home mom',
        'working mom',
        'postpartum depression',
        'hyperemesis',
        'multiples',
        'special needs child'
      ];
      $scope.checkin = [];
      $scope.results = [];
      $scope.checked = function (condition) {
        if ($scope.checkin.indexOf(condition) === -1) {
          $scope.checkin.push(condition)
          console.log('checkin array', $scope.checkin)
          mainService.connectFriends(condition).then(function(response) {
            console.log(response); 
            if (response.length === 0) {
               var noResults = {
              condition: condition,
              friends: ['no results']
            }
            $scope.results.push(noResults);
            return;
            }
            var newCond = {
              condition: response[0].name,
              friends: []
            }
            for (var i = 0; i < response.length; i++) {
              newCond.friends.push(response[i].first_name)
            }
            $scope.results.push(newCond)
            console.log($scope.results);
          })
        } else {
          $scope.checkin.splice($scope.checkin.indexOf(condition), 1)
          console.log($scope.checkin)
          for (let i = 0; i < $scope.results.length; i++) {
            if ($scope.results[i].condition === condition) {
              $scope.results.splice(i, 1)
              i--;
            }
          }
        }
      }

    }
  }
})