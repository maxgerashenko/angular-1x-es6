
class phoneDetailsCtrl {
    constructor(PersonService, $routeParams) {
        'ngInject';
        PersonService.getPhoneDetails($routeParams.phoneID).then(response => {
            this.phone = response.data;
        })
    }
}

export default phoneDetailsCtrl;