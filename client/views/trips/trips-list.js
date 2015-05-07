'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function($scope, Trip, $window){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });

  $scope.destroy = function(trip){
    Trip.destroy(trip)
    .then(function(response){
      $scope.trips = $window._.remove($scope.trips, function(t){
        return t === response.data;
      });
    });
  };
  
});
