class CartService {
    /*
     The below annotation will be processes by ngAnnotate, which
     will annotate the constructor after compiling for minification.
     */

    /*@ngInject;*/
    constructor($q, $http) {
        this._$q = $q;
        this._$http = $http;
        this.defer = this._$q.defer();

        this._cart = {};

    }

    _isCartEmpty(){
        return !this._cart.phones;
    }

    getCart(){
        var self = this;
        if(this._isCartEmpty()){
            return this._$http.get('/src/json/cart.json',{}).then((resolve)=>{
                self._cart.phones = resolve.data;
                self.defer.resolve(self._cart);
                return self.defer.promise;
            })
        }
         else {
            return this._$q.when(self._cart);
        }
    }

    addToCart(item){
        this._cart.phones.push(item);
    }

    removeFromCart(item){
        function removeById(value) {
            return value.id !== item.id;
        }
        this._cart.phones = this._cart.phones.filter(removeById)
    }

    getPhoneDetails(phoneID) {
        return this.$http.get('/src/json/' + phoneID + '.json');
    }
}

export default CartService;