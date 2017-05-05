angular.module('App', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: './views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('signup', {
               templateUrl: './views/signup.html',
               controller: 'signupCtrl',
               url: '/signup'
           })
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
