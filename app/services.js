
var demoAppServices = angular.module('demoApp.services', ['ngResource']);

demoAppServices.factory('newsData',['$resource', function ($resource) {
    return $resource('data/news.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);

demoAppServices.factory('articlesData',['$resource', function ($resource) {
    return $resource('data/articles.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);