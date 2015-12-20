'use strict';

angular.module('App').config([
    '$stateProvider',
    '$urlRouterProvider',
    'CONSTS',
    ($stateProvider, $urlRouterProvider, CONSTS) => {
        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('index', {
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
            })
            .state('index.main', {
                url: '/index'
            });
    }
]);