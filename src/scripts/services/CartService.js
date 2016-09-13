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
        this._storage = {};

    }

    _isCartEmpty(){
        return !this._cart.phones;
    }

    getCart(){
        var self = this;
        return this._$http.get('/src/json/storage.json',{}).then((resolve)=>{
            self._storage.phones = resolve.data;

            if(this._isCartEmpty()){
                return self._$http.get('/src/json/cart.json',{}).then((resolve)=>{
                    self._cart.phones = resolve.data;
                    self.defer.resolve(self._cart);
                    return self.defer.promise;
                })
            }
             else {
                return this._$q.when(self._cart);
            }
        })
    }

    getItemSaldo(id){
        // TODO: Fix problem with elements when index  = -1

        let index = findOjectIndexById(id, this._cart.phones);
        if(index > 0){
            let required = (this._cart.phones[index].count) ? this._cart.phones[index].count : 1;
            return this._storage.phones[id].quantity - required;
        }
            return 1

    }

    addToCart(item){
        let elementIndex = findOjectIndexById(item.id, this._cart.phones);
        if (elementIndex > -1){
            let itemCount = this._cart.phones[elementIndex].count;
            this._cart.phones[elementIndex].count = (itemCount) ? itemCount+1 : 2;
        } else {
            this._cart.phones.push(item);
        }
    }

    removeFromCart(item){
        function remove(element, index, array) {
            if(element.id === item.id){
                if(element.count < 2){
                    console.log('array.splice(index, 1);', index );
                    array.splice(index, 1);
                } else {
                    element.count--;
                }
            }
        }

        this._cart.phones.forEach(remove)
    }

    getItemsCount(){
        let count = 0;
        function Count(element, index, array){
            console.log('count += element.count+0',count += element.count+0);
            //count += element.count+0;
        }
        if(this._cart.phones)
            this._cart.phones.forEach(Count);
        return count;
    }

    getPhoneDetails(phoneID) {
        return this.$http.get('/src/json/' + phoneID + '.json');
    }
}

function findOjectIndexById(id, array){
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].id === id) {
            return i;
        }
    }
    return -1;
}

export default CartService;