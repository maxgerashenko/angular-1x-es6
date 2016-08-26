import {UpperFilter, LowerFilter} from './textFilters';
import Checkmark from './checkmark.js';

const filters = angular.module('filters',[])
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .filter('checkmark', Checkmark);

export default filters;