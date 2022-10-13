//primero sin las closure

function moneyBox (coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

//con closure

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins; // el += es para hacer adición de los elementos que le paso
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
//con esta lógica ahora me suma las monedas que voy ahorrando porque he metidodentro de la funcion moneyBox, que es el dinero que tengo ahorrado, la logica de la función como funciona el ahorro

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);