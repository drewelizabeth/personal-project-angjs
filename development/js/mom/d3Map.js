angular.module('App').directive('d3Map', function() {
  return {
   restrict: 'E',
    templateUrl: './../../views/d3Map.html',
    controller: function ($scope) {
      $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyApjP22hyTOtvz4l40FgNQ_OpMrMDlYSVU";
  }
  }
})