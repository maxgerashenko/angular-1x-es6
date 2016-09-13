import CartController from './cart.controller.js'

//class CartDirective {
//    /*@ngInject*/
//    constructor($http, $mdSticky, $scope) {
//        this.$http = $http;
//        this.restrict = 'E';
//        this.bindToController=true;
//        this.templateUrl= './src/templates/cart.html';
//        this.controller= CartController;
//        this.controllerAs= 'cartCtrl';
//        console.log('1this.$mdSticky',$mdSticky);
//        this.$mdSticky = $mdSticky;
//        this.scope = {
//        }
//    }
//
//    // works
//    compile($scope, tElement, tAttrs, transclude){
//        console.log('2this.$mdSticky', this.$mdSticky);
//        this.$mdSticky($scope, tElement);
//    }
//}
//
//CartDirective.$inject = ['$mdSticky'];

const CartDirective = function($mdSticky, $compile) {
    return {
        restrict: 'E',
        bindToController: true,
        templateUrl: './src/templates/cart.html',
        controller: CartController,
        controllerAs: 'cartCtrl',
        replace: true,
        //
        link: function(scope,element) {
            $mdSticky(scope, element, $compile(element)(scope));
        }
    }
};

export default CartDirective