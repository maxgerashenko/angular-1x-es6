'use strict'

function checkmark() {
    return function(input){
        return input ? '\u2713' : '\u2718';
    }
}

export default checkmark