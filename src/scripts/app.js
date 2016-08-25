/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import Services from './services/services';
import Filters from './filters/filters';
import Controllers from './controllers/controllers';
import Components from './components/components.js';

angular.module('myApp', [
	Controllers.name,
	Filters.name,
	Services.name,
	Components.name
]);