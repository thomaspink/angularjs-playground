angular.module('angularPlaygroundApp').factory('TodoService', function() {

	var todos = [];
	var archived = [];
	var count = 0;
	var todoService = {};
	var STORAGE_ID = "angular-playground-todos";
	
	todoService.addTodo = function(todoText) {
    	count++;
		todos.push({id: count, text: todoText, done: false});
		localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		return todos;
	};

	todoService.getTodos = function() {
		get();
		return todos;
	};

	todoService.archiveTodo = function(todo) {
		var oldTodos = todos;
		todos = [];
		todo.done = true;
		archived.push(todo);
		for(var i=0; i<oldTodos.length; i++) {
			if(oldTodos[i].id !== todo.id) {
				todos.push(oldTodos[i]);
			}
		}
		localStorage.removeItem(STORAGE_ID);
		localStorage.setItem(STORAGE_ID, JSON.stringify(todos.concat(archived)));
		return todos;
	}

	todoService.getArchived = function() {
		get();
		return archived;
	};

	todoService.clearArchived = function() {
		archived = []
		localStorage.removeItem(STORAGE_ID);
		localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
	}

	function get() {
		var t = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		todos = [];
		archived = [];
		for(var i=0; i<t.length; i++) {
			(!t[i].done) ? todos.push(t[i]) : archived.push(t[i]);
		}

		count = todos.length + archived.length;
	}

	return todoService;

});