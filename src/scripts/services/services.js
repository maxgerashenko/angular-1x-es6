import DataService from './DataService'
import CartService from './CartService'

const services = angular.module('services',[])
    .service('DataService', DataService)
    .service('CartService', CartService);

export default services;