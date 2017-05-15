angular.module('App').service('mainService', function($http) {

  
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

this.serviceCost = function(services) {
  console.log('services', services);
  return $http({
    method: 'POST',
    url: '/api/servicecost',
    data: {services}
  }).then(function(response) {
    console.log('service', response);
    return response;
  });
};

// this.getMomNames = function(search){
//   return $http({
//     method: 'GET',
//     url: '/api/getnames'
//   }).then(function(response) {
//     console.log(response.data);
//     let sentNames = [];
//     // let beforeNames = [];
//     // beforeNames.push(response.data);
//     // console.log(beforeNames);
//     for (let i = 0; i < response.data.length; i++) {
//       sentNames.push(response.data[i].first_name);
//       console.log(sentNames)
//     }
//     return sentNames;
//   })
// };

})