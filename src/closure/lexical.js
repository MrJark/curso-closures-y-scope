

const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //funcion interna y esto es un closure, una función dentro de una función
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){// otro clossure
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}