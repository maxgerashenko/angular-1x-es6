/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

class HomeController {

	/*@ngInject;*/
	constructor(PersonService) {
		PersonService.getPerson().then(person => {
			this.person = person;
		});

		PersonService.getPhones().then( response => {
			this.phones = response.data;
		});
	}
}

export default HomeController;