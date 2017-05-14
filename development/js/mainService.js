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

this.connectFriends = function(checked) {
  console.log('mainService', checked);
  return $http({
    method: 'POST',
    url: '/api/connections',
    data: {checked}
  }).then(function(response) {
    console.log(response);
    return response.data;
  });
};

this.friendUpdate = function(connect) {
  console.log(connect);
  return $http({
    method: 'PUT',
    url: '/api/updateconnect',
    data: {connect}
  }).then(function(response) {
    return response;
  });
};


})