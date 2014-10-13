/* Controllers */
var demoAppControllers = angular.module('demoApp.controllers', ['demoApp.services']);

demoAppControllers.controller('navbarCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.highlight = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
}]);

demoAppControllers.controller('menuCtrl', ['menuData',function(menuData) {
    var vm = this;
    vm.menu = menuData.query();
    //console.log($scope.news);

}]);

demoAppControllers.controller('newsCtrl', ['newsData',function(newsData) {
    var vm = this;
    vm.news = newsData.query();
    //console.log($scope.news);

}]);

demoAppControllers.controller('staffCtrl', ['$scope','articlesData', function($scope, articlesData) {
    $scope.subcategories =[];
    $scope.subcategories = articlesData.query();

}]);

demoAppControllers.controller('salaryCtrl', [function() {
}]);

demoAppControllers.controller('docflowCtrl', [function() {
}]);


demoAppControllers.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('active');
                        } else {
                            angular.element(li).removeClass('active');
                        }
                    });
                }
            }
            setActive();
            scope.$on('$locationChangeSuccess', setActive);
        }
    };
}]);
