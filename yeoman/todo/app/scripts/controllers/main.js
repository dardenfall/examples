'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3',];
    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
  });

