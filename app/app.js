'use strict';
// Declare app level module which depends on filters, and services
// Используем https://github.com/janpantel/angular-sails
var app = angular.module('demoApp', ['ui.router', 'demoApp.controllers', 'demoApp.directives']).
    config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/news");
            $stateProvider
            .state("news", {
                url: "/news",
                templateUrl: "app/partials/news.html",
                controller:  "newsCtrl as vm"
            })
            .state("subcategory", {
                url: "/subcategory/:subId",
                templateUrl: "app/partials/subcategory.html",
                controller:  "subcategoryCtrl as vm"
            })
            .state("staff", {
                    url: "/staff",
                    templateUrl: "app/partials/staff.html",
                    controller:  "staffCtrl"
            })
            .state("salary", {
                    url: "/salary",
                    templateUrl: "app/partials/salary.html",
                    controller:  "salaryCtrl"
            })
            .state("docflow", {
                    url: "/docflow",
                    templateUrl: "app/partials/docflow.html",
                    controller:  "docflowCtrl"
            });
    }]);
