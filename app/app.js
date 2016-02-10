'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'xeditable',
  'app.question',
  'app.view1',
  'app.view2',
  'app.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/question'});
}]);
