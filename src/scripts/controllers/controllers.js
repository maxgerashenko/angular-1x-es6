import HomeController from './HomeController';
import TestController from './TestController.js';

const Controllers = angular.module('controllers',[])
        .controller('HomeController', HomeController)
        .controller('TestController', TestController);

export default Controllers;