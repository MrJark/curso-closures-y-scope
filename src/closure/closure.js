//las closure nos dan acceso a nivel léxico

function greeting() {
    let userName = 'Chema';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName();
}

const g = greeting();
console.log(g); // aquí retornamos la funcion, la definición de userName
console.log(g()); //y aquí nos está entregando el valor porque la estamos ejecutando


