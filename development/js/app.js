angular.module('App', ['ui.router', 'angular-stripe'])
    .config(function($stateProvider, $urlRouterProvider, stripeProvider) {
        
        stripeProvider.setPublishableKey('pk_test_2D5DxWcgjehqxAcKTVKGhUn5');

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
               url: '/mom'
           })
           .state('friend', {
               templateUrl: './views/friend.html',
               controller: 'friendCtrl',
               url: '/friend'
           })
           .state('success', {
               templateUrl: './views/success.html',
               controller: 'successCtrl',
               url: '/success'
           })
        
 });
