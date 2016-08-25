import phoneListCtrl from './phone-list.controller.js';

let phoneListComponent = {
    templateUrl: './src/templates/phone-list.html',
    controller: phoneListCtrl,
    bindings: {
        query: '='
    }
};

export default phoneListComponent;