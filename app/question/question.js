'use strict';

angular.module('app.question', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/question', {
    templateUrl: 'question/question.html',
    controller: 'questionCtrl'
  });
}])

.controller('questionCtrl', [function() {

}]);