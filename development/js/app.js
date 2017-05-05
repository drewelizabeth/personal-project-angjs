angular.module('App', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: './views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
        //    .state('signup', {
        //        templateUrl:
        //        controller:
        //        url:
        //    })
           .state('login', {
               templateUrl: './views/login.html',
               controller: 'loginCtrl',
               url: '/login'
           })
           .state('mom', {
               templateUrl: './views/mom.html',
               controller: 'momCtrl',
               url: '/momlogin'
           });
 });
