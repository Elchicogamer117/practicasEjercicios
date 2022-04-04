//El usuario ingresa su movimiento, lo convertimos en entero
const moveUser = parseInt(prompt("Haz tu movimiento: 1=Piedra 2=Papel 3=Tijeras"))
//La computadora hace su movimiento, floor redondea a entero HACIA ABAJO
const moveCPU = Math.floor(Math.random() * 3) + 1;

//---------------------------------------------------------------funciones---------------------------------------
//validamos ambos movimientos con if
function resultadoIf (moveUser, moveCPU){
    if (
        (moveUser == 1 && moveCPU == 3) ||
        (moveUser == 2 && moveCPU == 1) ||
        (moveUser == 3 && moveCPU == 2) 
        ){
        console.log("¡Ganaste! 👏, la computadora eligió  " + moveCPU); 
    } else if(moveUser == moveCPU){
        console.log("¡Empate 🙌, ambos eligieron " + moveCPU);
    } else {
        console.log("La computadora gano 🤷‍♂️, eligió " + moveCPU + ", mejor suerte la proxima ");
    }  
};

//Llamamos a la función
resultadoIf(moveUser,moveCPU);



//validamos ambos movimientos con switch

function resultadoSwitch (moveUser, moveCPU){
    switch (true) {
        case (moveUser == 1 && moveCPU == 3) ||
            (moveUser == 2 && moveCPU == 1) ||
            (moveUser == 3 && moveCPU == 2) :
            console.log("¡Ganaste! 👏, la computadora eligió  " + moveCPU);
            break;
        case (moveUser == moveCPU):
            console.log("¡Empate 🙌, ambos eligieron " + moveCPU);
            break;
        default:  console.log("La computadora gano 🤷‍♂️, eligió " + moveCPU + ", mejor suerte la proxima ");
    }
}

//Llamamos a la función
resultadoSwitch(moveUser,moveCPU);
