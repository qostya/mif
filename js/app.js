'use strict';

(function (angular) {

    angular.module('App', ['ui.router']);
})(angular);

(function (angular) {

    angular.module('App').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        var pathToModules = './js/modules/';

        $urlRouterProvider.otherwise('/index');

        $stateProvider.state('index', {
            abstract: true,
            url: '',
            views: {
                '': {
                    template: '<div ui-view></div>'
                },
                header: {
                    templateUrl: pathToModules + 'header/views/header.html'
                }
            }
        }).state('index.main', {
            url: '/index'
        });
    }]);
})(angular);

(function (angular) {})(angular);