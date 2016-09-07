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
            });

        $locationProvider
        //	.html5Mode(true)
        //	.hashPrefix('!')
    }
);

export default config;