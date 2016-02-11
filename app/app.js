'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'xeditable',
  'ui.bootstrap',
  'app.question',
  'app.view1',
  'app.view2',
  'app.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/question'});
}]);


///////////////
var swapArrayElements = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
