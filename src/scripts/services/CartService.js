class CartService {
    /*
     The below annotation will be processes by ngAnnotate, which
     will annotate the constructor after compiling for minification.
     */

    /*@ngInject;*/
    constructor($q, $http) {
        this._$q = $q;
        this.$http = $http;
        this.defer = this._$q.defer();

        this.getCart().then((response)=>{
            this.data = response.data;
        });

    }

    observeFoo() {
        return this.defer.promise;
    }

    getCart(){
        let promise = (this.data) ?
            this._$q.when(function(){
                return this.data;
            }):
            this.$http.get('/src/json/cart.json');
        console.log(promise);
        return promise;
    }

    addToCart(item){
        console.log('item', item);
        console.log('this.data', this.data);
        this.data.push(item);
        this.defer.notify(this.data);
    }

    getPhoneDetails(phoneID) {
        return this.$http.get('/src/json/' + phoneID + '.json');
    }
}

export default CartService;