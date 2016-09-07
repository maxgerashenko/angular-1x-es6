
class CartController {
    constructor(CartService) {
        'ngInject';
        this._CartService = CartService
        this.cart = CartService.getCart().then(resolve=>{
            this.cart = resolve;
        })
    }

    removeFromCart(item){
        console.log('CartController.item',item)
        console.log('removeFromCart');
        this._CartService.removeFromCart(item);
    }
}

export default CartController;