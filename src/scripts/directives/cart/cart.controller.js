
class CartController {
    constructor() {
        'ngInject';

    }

    removeFromCart(item){
        console.log('item',item)
        console.log('removeFromCart');
        this.remove(item);
    }
}

export default CartController;