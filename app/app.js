'use strict';
// Declare app level module which depends on filters, and services
// Используем https://github.com/janpantel/angular-sails
var app = angular.module('demoApp', ['ngRoute', 'demoApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'app/partials/news.html', controller: 'newsCtrl'});
        $routeProvider.when('/staff', {templateUrl: 'app/partials/staff.html', controller: 'staffCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);