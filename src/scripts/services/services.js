import PersonService from './PersonService'

const services = angular.module('services',[])
    .service('PersonService', PersonService);

export default services;