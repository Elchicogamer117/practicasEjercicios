//* --------- Ejemplo 1: Callback directo -------- */
function suma( num1, num2 ) {
    return num1 + num2;
}
function resta( num1, num2 ) {
    return num1 - num2;
}
function calcular( num1, num2, callback ) {
    return callback( num1, num2 );
}
console.log(calcular( 20, 8, suma ));
console.log(calcular( 20, 8, resta ));

//* --------- Ejemplo 2: Callback asincrono -------- */

function date( callback ) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 2000);
}
function printDate( dateNow ) {
    console.log(dateNow);
}
date(printDate);

//* --------- Ejemplo 3: Callback asincrono -------- */

function saludo( nombre ) {
    console.log(`Hola ${nombre} 🖖`);
}

setTimeout(saludo, 2000, 'Cristian');