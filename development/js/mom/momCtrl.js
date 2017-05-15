angular.module('App').controller('momCtrl', function($scope, quoteService) {
 
   quoteService.getQuote().then(function(result) {
      console.log('ctrl', result.author);
      $scope.quote = result.quote;
    $scope.author = result.author_name;
   });
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