'use strict';

angular.module('angularPlaygroundApp').controller('TodosCtrl', function ($scope, TodoService) {
	
	$scope.todos = TodoService.getTodos();
	$scope.archived = TodoService.getArchived();


    $scope.addTodo = function() {
    	if($scope.todoText.length > 2) {
    		$scope.todos = TodoService.addTodo($scope.todoText);
    	}
		$scope.todoText = '';
	};

	$scope.archiveTodo = function(todo) {
		$scope.todos = TodoService.archiveTodo(todo);
	};

	$scope.clearArchive = function() {
		TodoService.clearArchived();
		$scope.archived = [];
	}
});
