angular.module('App').directive('stripe', function() {
  return {
restrict: 'E',
templateUrl: './../../views/stripe.html',
    controller:($scope, stripe, $http, $state) => {
      $scope.donation = {};

      $scope.charge = function(donation) {
        return stripe.card.createToken($scope.donation.card)
        .then(function(response){
          console.log('token created for card ending in', response.card.last4);
          var donation = angular.copy($scope.donation);
          donation.card = void 0;
          donation.token = response.id;

          return $http({
            method: 'POST',
            url: '/api/donation',
            data: {
              amount: $scope.amount,
              donation: donation
            }
          })
        }).then(function(payment) {
          console.log('successfully submitted donation for $', payment);
          $state.go('success');
        })
        .catch(function(err) {
          if (err.type && /^Stripe/.test(err.type)) {
            console.log('Stripe error: ', err.message);
            alert(err.message)
          } else {
            console.log('Other error occurred, possibly with your API', err.message);
            alert(err.message)
          }
        });
      };

    }


  }
})