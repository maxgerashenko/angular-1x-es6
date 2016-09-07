import CartController from './cart.controller.js'

class CartDirective {
    constructor($http) {
        this.$http = $http;
        this.restrict = 'E';
        this.bindToController=true;
        this.templateUrl= './src/templates/cart.html';
        this.controller= CartController;
        this.controllerAs= 'cartCtrl';

        this.scope = {
            cart: '=',
            remove: '&'
        }
    }

    compile(){
        console.log('compile')
    }

    link(){
        console.log('link')
    }
}

//CartDirective.$inject = ['$http'];

export default CartDirective
