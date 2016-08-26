angular.module('myApp')
    .config(['$locationProvider', '$routeProvider', function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/phones', {
                template: '<phone-list query="ctrl.query"/>'
            })
            .when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            })
            .otherwise('/phones');

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    }
]);