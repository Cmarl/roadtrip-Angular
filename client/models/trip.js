'use strict';

angular.module('roadtrip')
.factory('Trip', function($window, $http, nodeUrl){

  function Trip(o){
    this._id = o._id;
    this.name = o.name;
    this.departure = o.departure;
  }

  Trip.dontStop = function(stop, tripId){
    return $http.delete(nodeUrl + '/trips/' + tripId + '/stops/' + stop._id);
  };

  Trip.destroy = function(trip){
    return $http.delete(nodeUrl + '/trips/' + trip._id);
  };

  Trip.show = function(id){
    return $http.get(nodeUrl + '/trips/' + id);
  };

  Trip.find = function(){
    return $http.get(nodeUrl + '/trips');
  };

  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };

  Trip.prototype.addStop = function(stop){
    return $http.post(nodeUrl + '/trips/' + this._id + '/stops', stop);
  };

  return Trip;
});
