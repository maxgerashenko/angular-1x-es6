/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

class HomeController {

	/*@ngInject;*/
	constructor(DataService, $location, CartService) {
		this.$location = $location;
		this.CartService = CartService;
		var self = this;

		DataService.getPhones().then( response => {
			this.phones = response.data;
		});


		this.query = this.query || '';

		this.isTabActive = function(state){
			return state === this.$location.path();
		};

		this.cart={};

		CartService.getCart().then((resolve)=> {
				this.cart = resolve
			}
		)
	}

	removeFromCart(item) {
		this.CartService.removeFromCart(item);
	}
}

export default HomeController;