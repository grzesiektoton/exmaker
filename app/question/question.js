'use strict';

angular.module('app.question', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/question', {
    templateUrl: 'question/question.html',
    controller: 'QuestionCtrl'
  });
}])

.controller('QuestionCtrl', [function() {
   this.questions = [
      {
        content: "Questions 1",
        answers: [
            {
                content: "answer 1",
                correct: false
            },
            {
                content: "answer 2",
                correct: true
            },
            {
                content: "answer 3",
                correct: false
            }
        ]
      }
   ];
   this.addAnswer = function(question){
     question.answers.push({
        content: "answer",
        correct: false
     });
   };
   this.addQuestion = function(){
    this.questions.push({
        content: "Questions",
        answers: []
    });
  };
  this.removeAnswer = function(question, pos){
     question.answers.splice(pos, 1);
  };
  this.moveUpAnswer = function(question, pos){
    swapArrayElements(question.answers, pos, pos-1);
  };
  this.moveDownAnswer = function(question, pos){
    swapArrayElements(question.answers, pos, pos+1);
  };
}]);