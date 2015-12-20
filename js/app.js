"use strict";

angular.module("searchForm", []);

angular.module('App', ["searchForm", "ui.router"]);

angular.module('App').config(['$stateProvider', '$urlRouterProvider', 'CONSTS', function ($stateProvider, $urlRouterProvider, CONSTS) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('index', {
        abstract: true,
        url: '',
        views: {
            '': {
                templateUrl: CONSTS.pathToModules + 'main/views/main.html'
            },
            header: {
                templateUrl: CONSTS.pathToModules + 'header/views/header.html'
            }
        }
    }).state('index.main', {
        url: '/index',
        views: {
            singleBook: {
                templateUrl: CONSTS.pathToModules + 'singleBook/views/single_book.html'
            }
        }
    });
}]);

angular.module('searchForm').directive('searchForm', ['CONSTS', function (CONSTS) {
    return {
        restrict: 'A',
        templateUrl: CONSTS.pathToModules + 'searchForm/views/search_form.html'
    };
}]);

angular.module('App').constant('CONSTS', (function () {
    return {
        pathToModules: './js/modules/'
    };
})());