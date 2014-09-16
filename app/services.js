
var demoAppServices = angular.module('demoApp.services', ['ngResource']);

demoAppServices.factory('newsData',['$resource', function ($resource) {
    return $resource('data/news.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);
