angular.module('App').directive('servicesCost', function() {
  return {
    restrict: 'E',
    templateUrl: './../../views/services.html',
    // link: function (scope, element, attrs) {
    //         scope.expense = 0;
    //         function (service) {
    //             let total = 0;
    //             console.log(service);
    //             if( service === 'cleaning service') {
    //               total += 100;
    //             } else if (service === 'prenatal massage') {
    //               total += 110;
    //             } else if (service === 'postnatal massage') {
    //               total += 120;
    //             } else if (service === 'lactation consultant') {
    //               total+= 200;
    //             } else if (service === 'doula') {
    //               total += 500;
    //             }
  
    //             scope.expense = total;
    //         }

    //         element.on('click', wish(service));
    //     },
    controller: function ($scope, mainService) {
      $scope.services = [
        'cleaning service',
        'prenatal massage',
        'postnatal massage',
        'lactation consultant',
        'doula',
        'pedicure',
        'manicure'
      ];

      $scope.wish = function(service) {
         $scope.expense = 0;
                let total = 0;
                console.log(service);
                if( service === 'cleaning service') {
                  total += 70;
                } else if (service === 'prenatal massage') {
                  total += 110;
                } else if (service === 'postnatal massage') {
                  total += 120;
                } else if (service === 'lactation consultant') {
                  total+= 200;
                } else if (service === 'doula') {
                  total += 500;
                }
  
                $scope.expense = total;
            }
      

  //     $scope.wishes = [];
  //     $scope.wishresults = [];


  //     $scope.wish = function() {
  //       let total = 0;
  //       total += 50;
  //       $scope.expense = total;
  //     };

  //     $scope.wish = function (service) {
  //       if ($scope.wishes.indexOf(service) === -1) {
  //         $scope.wishes.push(service);
  //         console.log('wishes array', $scope.wishes)
  //         mainService.serviceCost($scope.wishes).then(function(response) {
  //           console.log(response); 
  //           if (response.length === 0) {
  //              var noResults = 0;
  //           $scope.wishresults.push(noResults);
  //           return;
         
  //       } else {
  //         $scope.wishes.splice($scope.wishes.indexOf(service), 1)
  //         console.log($scope.wishes)
  //         for (let i = 0; i < $scope.wishresults.length; i++) {
  //           if ($scope.wishresults[i].service === service) {
  //             $scope.wishresults.splice(i, 1)
  //             i--;
  //           }
  //         }
  //       }
  //     })
  //       }
  //     };
  }
}
})