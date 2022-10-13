// variable

var a; //declaramos la variable a
var b = b; // declaramos y asignamos a la vez
a = "ab";// esto es asignar un valor a la variable a
b = "bb"; //con esto re-asignación la variable b
var a = "aa"; // con esto re-declaramos la variable a


//Global Scope

var fruit = 'Apple'; //estamos iniciando y declarando una variable global, ed decir, que funciona para todo el código

function bestFruit (){
    console.log(fruit);
}

bestFruit();

//otra manera de crear otra variable global

//cuando no declaramos una variable y solo la asignamos, estamos haciendola global. Ej:

function countries( ){
    country = "Colombia"; //aquí estamos declarando country como global
    var country = "Mexico"; //aquí estoy creando una variable local pq le estoy declarando la propia variable, mientras que en la de arriba le doy a entender que es global pq no la he declarado, se supone que mas arriba estará
    console.log(country);
}

countries();
console.log(country);

