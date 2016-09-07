import CartDirective from './cart/cart.directive.js';

let directives = angular.module('directives',[])
    .directive('cart', () => new CartDirective());
export default directives;