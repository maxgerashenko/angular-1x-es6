
class phoneListCtrl {
    constructor(DataService, CartService){
        'ngInject';
        this._CartService = CartService;

        DataService.getPhones().then( response => {
            this.phones = response.data || [];
        });

        this.selected = {};
    }

    isAvailable(id, quantity){
        return this._CartService.isAvailable(id, quantity);
    }

    addToCart(item){
        console.log('item', item);
        this._CartService.addToCart(item);
    }
}

export default phoneListCtrl;