angular.module('App').service('mainService', function($http) {

const baseUrl = 'http://localhost:3000/'
  
  //sign up by posting new user
  this.newUser = function(newUser) {
    console.log(typeof(newUser));
    return $http({
      method: 'POST',
      url: '/newuser',
      data: newUser
    }).then(function(response){
      return response;
    });
  };

  
  this.login = function(userObj) {
    console.log(userObj);
    return $http({
      method: 'POST',
      url: '/api/login',
      data: userObj
    }).then(function(response){
      return response;
    })
  alert("incorrect username and password");
  };

})