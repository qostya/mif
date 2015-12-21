"use strict";

angular.module("searchForm", []);

angular.module("singleBook", []);

angular.module('App', ["searchForm", "singleBook", "ui.router"]);

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
                templateUrl: CONSTS.pathToModules + 'singleBook/views/single_book.html',
                controller: 'singleBookCtrl'
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

angular.module('singleBook').controller('singleBookCtrl', [function () {}]);

angular.module('singleBook').directive('eye', function () {
    function postLink(el, attrs) {
        var dotParent = el[0].querySelector('.b-single-book_eye_wrapper'),
            dot = dotParent.children[0],
            elStartCoords = dotParent.getBoundingClientRect(),
            eyeRadius = +attrs.eyeRadius || 53,
            eyeSpeed = +attrs.eyeSpeed || 4,
            averageLength = (window.innerWidth + window.innerHeight) / eyeSpeed;

        function eyeController(mouseX, mouseY) {
            var coordX = mouseX - elStartCoords.left,
                coordY = mouseY - elStartCoords.top,
                angle = Math.atan2(coordX, coordY) * (180 / Math.PI) - 90,
                len = Math.sqrt(coordX * coordX + coordY * coordY),
                theta = angle * Math.PI / 180,
                width = eyeRadius * (len / averageLength),
                height = eyeRadius * (len / averageLength),
                dx = undefined,
                dy = undefined;

            if (width > eyeRadius) {
                width = eyeRadius;
            }

            if (height > eyeRadius) {
                height = eyeRadius;
            }

            dx = width * Math.cos(theta);
            dy = height * Math.sin(theta);

            dot.style.left = dx + 'px';
            dot.style.top = ~dy + 'px';
        }

        function eyeHandler(ev) {
            eyeController(ev.pageX, ev.pageY);
        }

        document.addEventListener('mousemove', eyeHandler);
    }

    return {
        restrict: 'A',
        compile: postLink,
        template: "<div class=\"b-single-book_eye\">\n                           <div class=\"b-single-book_eye_wrapper\">\n                               <span class=\"b-single-book_eye_dot\"><i></i></span>\n                           </div>\n                       </div>"
    };
});

angular.module('App').constant('CONSTS', (function () {
    return {
        pathToModules: './js/modules/'
    };
})());