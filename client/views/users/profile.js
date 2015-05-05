'use strict';

angular.module('roadtrip')
.controller('ProfileCtrl', function($scope, $window, User){

  $scope.update = function(obj){
    var user = new User(obj);
    user.save()
    .then(function(){
      $window.swal({title: 'Profile Updates Saved', text: 'Awwwwww Yeaaaaaaaa', type: 'success'});
    })
    .catch(function(){
      $window.swal({title: 'Profile Update Error', text: 'There was a problem with your profile update!!', type: 'error'});
    });
  };
});
