import HomeController from './HomeController';
import TestController from './TestController.js';
import SettingsController from './SettingsController.js';

const Controllers = angular.module('controllers',[])
        .controller('HomeController', HomeController)
        .controller('TestController', TestController)
        .controller('SettingsController', SettingsController);

export default Controllers;