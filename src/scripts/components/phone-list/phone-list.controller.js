
class phoneListCtrl {
    constructor(DataService, CartService){
        'ngInject';
        this._CartService = CartService;

        DataService.getPhones().then( response => {
            this.phones = response.data || [];
        });

        this.selected = {};
    }

    isAvailable(item){
        item.count = (item.count)?item.count:1;
        return this._CartService.getItemSaldo(item.id) > 0 ;
    }

    addToCart(item){
        this._CartService.addToCart(item);
    }
}

export default phoneListCtrl;