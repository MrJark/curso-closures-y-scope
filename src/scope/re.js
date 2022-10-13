// //Lo comento todo porque ver ojo me da TOC :)

// //Reasignación con VAR

// var firstName; // declaramos una variable pero no tienen nada asignado, undifined es la asignación por defecto
// firstName = 'Chema';// asigno el valor al firstName
// console.log('firstName');

// var lastName = 'Ferrández';// declaramos y asignamos
// //pero si pongo, lo siguiente, perderá esa asignación por la anterior
// lastName = 'Cascales';//y ahora volvemos a asignar o reasignar el nuevo valor será este y el otro se perderá en el olvido :´(

// var secondName = 'Manuel';
// var secondName = 'Jose';
// //estas dos funciones, con var no me dan ningún problema pero aunque tengan la misma asignación pero con las let me da error y me dice que ya existe una variable let con esa declaración


// //Reasignación con let

// let fruit = 'apple'; //declarar y asignar
// fruit = 'kiwi'; //reasignar

// let fruit = 'banana'// me dará error porque ya he declarado la variable fruit arriba, aunque le asigne el mismo nombre, no va a funcionar


// //Reasignacion con const

// const animal = 'dog'; //declarar y asignar
// animal = 'cat'; //reasignación
// // en const no podemos reasignar ni tener el mismo nombre de la variable, es decir, no podemos re-declrar con el mismo nombre. Por tanto, const es mucho mas restrictivo que las otras dos

// //pero si te permite tener distintos arreglos en los arrays

// const vehicles = [];
// vehicles.push('car');// inyecta el elemento en el array
// console.log(vehicles);

// vehicles.pop();//esto me elimina el últio elemento del array
// //por tanto, si puedo usar vehicle pero solo de ciesta manera con const