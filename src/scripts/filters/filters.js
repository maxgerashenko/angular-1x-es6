import {UpperFilter, LowerFilter} from './textFilters';

const filters = angular.module('filters',[])
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter);

export default filters;