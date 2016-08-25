
class phoneListCtrl {
    constructor(PersonService){
        'ngInject';

        this.phones = PersonService.getPhones().then( response => {
            this.phones = response.data;
        }) || [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
}

export default phoneListCtrl;