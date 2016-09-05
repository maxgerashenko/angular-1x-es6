import CartController from './cart.controller.js'

const  CartDirective = function(CartService) {
    return {
        bindToController: true,
        templateUrl: './src/templates/cart.html',
        controller: CartController,
        controllerAs: 'cartCtrl',
        restrict: 'E',
        scope: {
            cart: '=cart'
        },
        // for html
        compile: function(tElement) {
        },
        // for watch
        link: function(scope, element, attrs) {
            CartService.getCart().then(response=>{
                this.cart = response.data;
            })
        }
    }
};

export default CartDirective
