angular.module('App').controller('momCtrl', function($scope, quoteService, mainService) {
 
   quoteService.getQuote().then(function(result) {
      $scope.quote = result.quote;
    $scope.author = result.author_name;
   });

$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyApjP22hyTOtvz4l40FgNQ_OpMrMDlYSVU";



});


//want to make random quote/friend message generator
//     quotepair.push(result.quote);
//       quotepair.push(result.author_name);
//       quotepair.push(quote1);
//       quotepair.push(quote2);
//       console.log('pair', quotepair);

// let length = result.length;
//             console.log("length", length);
//             var ranNum = Math.floor(Math.random() * length);
//             console.log("ranNum", ranNum);
//             return result.[ranNum];


 //   }
          //   var newCond = {
          //     condition: response[0].name,
          //     friends: []
          //   }
          //   for (var i = 0; i < response.length; i++) {
          //     newCond.friends.push(response[i].first_name)
          //   }
          //   $scope.wishresults.push(newCond)
          //   console.log($scope.results);
          // })