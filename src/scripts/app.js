/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import NameService from './services/PersonService';
import Filters from './filters/filters';
import Controllers from './controllers/controllers';

angular.module('myApp', [Controllers.name, Filters.name])
	.service('PersonService', NameService);