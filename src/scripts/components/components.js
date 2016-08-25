import PhoneListComponent from './phone-list/phone-list.component.js';

const components = angular
    .module('components',[])
    .component('phoneList', PhoneListComponent);

export default components;