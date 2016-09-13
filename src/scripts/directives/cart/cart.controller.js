
class CartController {
    constructor(CartService) {
        'ngInject';
        this._CartService = CartService;
        this.cart = CartService.getCart().then(resolve=>{
            this.cart = resolve;
        });
        this.selected = {};
    }

    removeFromCart(item){
        this._CartService.removeFromCart(item);
    }

    isAvailable(item){
        item.count = (item.count)?item.count:1;
        return this._CartService.getItemSaldo(item.id) >= 0 ;
    }

    onDrop(event, index, item, external, type, allowedType){
        this._CartService.addToCart(item);
    }

    getItemsCount(){
        return this._CartService.getItemsCount();
    }
}

export default CartController;