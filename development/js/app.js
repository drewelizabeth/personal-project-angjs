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
           .state('loggedin', {
               templateUrl: './views/loggedin.html',
               controller: 'loggedinCtrl',
               url: '/loggedin'
           })
           .state('mom', {
               templateUrl: './views/mom.html',
               controller: 'momCtrl',
               url: '/mom'
           })
           .state('friend', {
               templateUrl: './views/friend.html',
               controller: 'friendCtrl',
               url: '/friend'
           })
        
 });
