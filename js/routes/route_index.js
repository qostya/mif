'use strict';

angular.module('App').config([
    '$stateProvider',
    '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            let pathToModules = './js/modules/';

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
                            templateUrl: pathToModules + 'header/views/header.html'
                        }
                    }
                })
                .state('index.main', {
                    url: '/index'
                });
        }
]);