import phoneDetailsCtrl from './phone-details.controller.js';

let phoneDetails = {
        templateUrl: './src/templates/phone-details.html',
        controller: phoneDetailsCtrl,
        bindings: {
            phoneID: '='
        }
    };

export default phoneDetails;