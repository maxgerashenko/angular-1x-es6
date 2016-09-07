import CartController from './cart.controller.js'

class CartDirective {
    constructor($http, CartService) {
        this.$http = $http;
        this.restrict = 'E';
        this.bindToController=true;
        this.templateUrl= './src/templates/cart.html';
        this.controller= CartController;
        this.controllerAs= 'cartCtrl';

        this.scope = {
        }
    }

    // works
    compile(){

    }
}

//CartDirective.$inject = ['$http'];

export default CartDirective
