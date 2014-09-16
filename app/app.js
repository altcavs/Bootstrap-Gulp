'use strict';
// Declare app level module which depends on filters, and services
// Используем https://github.com/janpantel/angular-sails
var app = angular.module('demoApp', ['ngRoute', 'demoApp.controllers', 'demoApp.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/news', {templateUrl: 'app/partials/news.html', controller: 'newsCtrl'});
        $routeProvider.when('/staff', {templateUrl: 'app/partials/staff.html', controller: 'staffCtrl'});
        $routeProvider.when('/salary', {templateUrl: 'app/partials/salary.html', controller: 'salaryCtrl'});
        $routeProvider.when('/docflow', {templateUrl: 'app/partials/docflow.html', controller: 'docflowCtrl'});
        $routeProvider.otherwise({redirectTo: '/news'});
    }]);