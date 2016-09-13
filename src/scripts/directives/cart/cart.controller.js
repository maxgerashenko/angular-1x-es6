
class CartController {
    constructor(CartService) {
        'ngInject';
        this._CartService = CartService;
        this.cart = CartService.getCart().then(resolve=>{
            console.log('3# !!!!!!');
            this.cart = resolve;
        });
        this.selected = {};
    }

    removeFromCart(item){
        console.log('CartController.item',item);
        console.log('removeFromCart');
        this._CartService.removeFromCart(item);
    }

    isAvailable(id, quantity){
        return this._CartService.isAvailable(id, quantity);
    }

    onDrop(event, index, item, external, type, allowedType){
        console.log('Droped in Cart');
        console.log('item', item);
        this._CartService.addToCart(item);
    }
}

export default CartController;