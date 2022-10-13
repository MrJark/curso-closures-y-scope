//Strict Mode

'use strict'

pi = 3.1415;//estoy asignando la variable sin declararla pero si por arriba 'use strit' tal cual, me dará error porque estoy usando una avriable sin declarar


function myFunction(){
    return pi = 3.1415;
}
console.log(myFunction());
//me dovolverá pi sin problema

function myFunction(){
    'use strict'
    return pi = 3.1415;
}
console.log(myFunction());
//me dará eror porque no he declarado pi, solo la he asignado

