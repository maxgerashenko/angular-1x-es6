const config = angular.module('config', [])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/phones', {
                template: '<phone-list query="ctrl.query"></phone-list>'
            })
            .when('/phones/:phoneID', {
                template: '<phone-details/>'
            });

        $locationProvider
        //	.html5Mode(true)
        //	.hashPrefix('!')
    }
);

export default config;