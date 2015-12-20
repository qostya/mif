"use strict";

(function (angular) {
    angular.module("searchForm", []);
})(angular);

(function (angular) {
    angular.module('App', ["searchForm", "ui.router"]);
})(angular);

(function (angular) {

    angular.module('App').config(['$stateProvider', '$urlRouterProvider', 'CONSTS', function ($stateProvider, $urlRouterProvider, CONSTS) {
        $urlRouterProvider.otherwise('/index');

        $stateProvider.state('index', {
            abstract: true,
            url: '',
            views: {
                '': {
                    template: '<div ui-view></div>'
                },
                header: {
                    templateUrl: CONSTS.pathToModules + 'header/views/header.html'
                }
            }
        }).state('index.main', {
            url: '/index'
        });
    }]);
})(angular);

(function (angular) {
    angular.module('searchForm').directive('searchForm', ['CONSTS', function (CONSTS) {
        return {
            restrict: 'A',
            templateUrl: CONSTS.pathToModules + 'searchForm/views/search_form.html'
        };
    }]);
})(angular);

(function (angular) {
    angular.module('App').constant('CONSTS', (function () {
        return {
            pathToModules: './js/modules/'
        };
    })());
})(angular);