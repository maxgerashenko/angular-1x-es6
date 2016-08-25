import PhoneListComponent from './phone-list/phone-list.component.js';
import SearchBoxComponent from './search-box/search-box.component.js';

const components = angular
    .module('components',[])
    .component('phoneList', PhoneListComponent)
    .component('searchBox', SearchBoxComponent);

export default components;