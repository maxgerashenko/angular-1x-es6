import CartDirective from './cart/cart.directive.js';

let directives = angular.module('directives',[])
    .directive('cart', CartDirective);
export default directives;