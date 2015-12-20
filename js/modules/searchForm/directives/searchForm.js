'use strict';
angular.module('searchForm').directive('searchForm', [
        'CONSTS',
        (CONSTS) => {
            return {
                restrict: 'A',
                templateUrl: CONSTS.pathToModules + 'searchForm/views/search_form.html'
            };
        }
    ]
);