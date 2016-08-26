
class phoneListCtrl {
    constructor(PersonService){
        'ngInject';

        PersonService.getPhones().then( response => {
            this.phones = response.data || [];
        })
    }
}

export default phoneListCtrl;