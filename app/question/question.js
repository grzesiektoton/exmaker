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
      },
      {
        content: "Questions 2",
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
                correct: true
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
   console.log("Add question");
    this.questions.push({
        content: "Questions",
        answers: []
    });
  };
}]);