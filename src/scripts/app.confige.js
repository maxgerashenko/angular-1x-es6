const config = angular.module('config', [])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/phones', {
                template: '<phone-list query="ctrl.query"></phone-list>',
                controller: 'TestController',
                controllerAs: 'ctrlTest',
                resolve: {
                    //cart: function(CartService){
                    //    return CartService.getCart().then(function(response){
                    //        console.log('response.data', response.data)
                    //        return response.data;
                    //    });
                    //}
                }
            })
            .when('/phones/:phoneID', {
                template: '<phone-details/>'
            })
            .when('/settings', {
                template: '<div><h1>D3 Chart</h1><linechart data="ctrlSettings.data" options="ctrlSettings.options"></linechart></div>',
                controller: 'SettingsController',
                controllerAs: 'ctrlSettings'
            });

        $locationProvider
        //	.html5Mode(true)
        //	.hashPrefix('!')
    }
);

export default config;