/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

class HomeController {

	/*@ngInject;*/
	constructor(DataService, CartService, $location) {
		this.$location = $location;

		var self = this;

		CartService.getCart().then( response => {
			this.cart = response.data;
		});

		DataService.getPhones().then( response => {
			this.phones = response.data;
		});

		CartService.observeFoo().then(null, null, function(foo){
			console.log('foo',foo);

			self.cart = foo;
		});

		this.query = this.query || '';

		this.isTabActive = function(state){
			return state === this.$location.path();
		};
	}

	addToCart(item) {
		console.log('addToCart(item)');
		CartService.addToCart(item);
	}
}

export default HomeController;