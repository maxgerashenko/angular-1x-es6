/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import NameService from './services/PersonService';
import {UpperFilter, LowerFilter} from './filters/textFilters';
import Controllers from './controllers/controllers';

angular.module('myApp', [Controllers.name])
	.service('PersonService', NameService)
	.filter('upper', UpperFilter)
	.filter('lower', LowerFilter);