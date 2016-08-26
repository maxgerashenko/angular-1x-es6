import PhoneListComponent from './phone-list/phone-list.component.js';
import PhoneDetailsComponent from './phone-details/phone-details.component.js'
import SearchBoxComponent from './search-box/search-box.component.js';

const components = angular
    .module('components',[])
    .component('phoneList', PhoneListComponent)
    .component('phoneDetails', PhoneDetailsComponent)
    .component('searchBox', SearchBoxComponent);

export default components;