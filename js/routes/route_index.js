
angular.module('App').config([
    '$stateProvider',
    '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {

            $urlRouterProvider.otherwise("/index");

            $stateProvider
                .state('index', {
                    url: "/"
                });
        }
]);