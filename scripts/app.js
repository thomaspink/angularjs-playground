'use strict';

angular.module('angularPlaygroundApp', []).config(function ($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/todos'
    }).when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
    }).when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'TodosCtrl'
    }).otherwise({
        redirectTo: '/todos'
    });
});
