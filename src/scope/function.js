//Function scope

function greeting () {
    let = userName = "Anna"; //asignamos y declaramos
    console.log(userName);

    if (userName === 'Anna') {
        console.log(`Hello ${userName}`);
    }
}

greeting();

//la variable userName, solo puedo llamarle desde dentro de la funcion ya que en el scope global no existe