'use strict';

(function (angular) {
    angular.module('App', ['ui.router']);
})(angular);

(function (angular) {
    angular.module('App').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/index");

        $stateProvider.state('index', {
            url: "/"
        });
    }]);
})(angular);

(function (angular) {})(angular);