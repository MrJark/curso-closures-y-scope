
//Block Scope

function fruits() {
    //un bloque es todo aquello que esté dentro de los corchetes
    if (true) {
        var fruit1 = 'Apple';// a esta variable si puede acceder si hago un console.log aunque no la haya declarado en el global
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana';// block scope
        console.log('fruit2');
        console.log('fruit3');
        //si asigno los console.log aquí de fruit2 y fruit3 si me irán y correran en el orden siguiente: kiwi, banana y apple por la forma en la que está estructurado el código
    }
}
fruits();

console.log('fruit1');//funciona por la asignación de var
console.log('fruit2');// no va pq es scope block
console.log('fruit3');// no va tp por lo mismo