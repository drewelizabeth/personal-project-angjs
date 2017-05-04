angular.module('App', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../development/views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
        //    .state('signUp', {
        //        templateUrl:
        //        controller:
        //        url:
        //    })
        //    .state('logIn' {
        //        templateUrl:
        //        controller:
        //        url:
        //    })
           .state('mom', {
               templateUrl: '../views/mom.html',
               controller: 'momCtrl',
               url: '/momLogin'
           });
 });
