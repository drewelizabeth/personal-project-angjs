angular.module('App').service('quoteService', function($http) {

this.getQuote = function() {
  return $http({
    method: 'GET',
    url: 'https://apimk.com/motivationalquotes?get_all_quote=yes',
  }).then(function(result){
    console.log ('quote', result);
        var length = result.data.length;
            console.log("length", length);
            var ranNum = Math.floor(Math.random() * length);
            console.log("ranNum", ranNum);
            return result.data[ranNum];
  })
}

});

// 'https://apimk.com/motivationalquotes?get_all_quote=yes'
// http://quotes.rest/qod.json?category=love
// console.log('quote and data', result.data.contents.quotes);
// https://www.brainyquote.com/quotes_of_the_day.html