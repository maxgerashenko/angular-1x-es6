
class phoneListCtrl {
    constructor(DataService, CartService){
        'ngInject';
        this.CartService = CartService;

        DataService.getPhones().then( response => {
            this.phones = response.data || [];
        });
    }

    addToCart(item){
        console.log('item', item);
        this.CartService.addToCart(item);
    }
}

export default phoneListCtrl;