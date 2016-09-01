class DataService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q, $http) {
		this._$q = $q;
		this.$http = $http;
	}

	getPhones() {
		return this.$http.get('/src/json/phones.json');
	}

	getPhoneDetails(phoneID) {
		return this.$http.get('/src/json/' + phoneID + '.json');
	}
}

export default DataService;