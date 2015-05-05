'use strict';

angular.module('roadtrip')
.controller('NavCtrl', function($rootScope, $scope, $state, User, $http){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getNameFrom(data);
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
      User.findOrCreate()
      .then(function(){
        $state.go('home');
      });
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $http.defaults.headers.common.Authorization = null;
    }
    $state.go('home');
  });

  function getNameFrom(data){
    switch (data.provider){
      case 'twitter':
        return data.twitter.displayName;
      }
    }

    $scope.logout = function(){
      User.logout();
    };
  });
  
