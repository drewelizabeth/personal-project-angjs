angular.module("App", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('about', {
               templateUrl: '../views/about.html',
               controller: 'aboutCtrl',
               url: '/about'
           });
 });
