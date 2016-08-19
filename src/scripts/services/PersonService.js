import Person from '../model/Person';

class PersonService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q, $http) {
		this._$q = $q;
		this.$http = $http
		this.phones = {};
	}

	getPerson() {
		return this._$q.when(new Person());
	}

	getPhones() {
		return this.$http.get('/src/json/phones.json', {})
	}
}

export default PersonService;