//* ya vienen por defecto, muchos los hemos estado utilizando

let i = 0
let interval = setInterval(function(){
    console.log("Hola")
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++
}, 1000)

setImmediate( function(){
    console.log("Hola")
})

console.log(__dirname)
console.log(__filename)

//*variables globales
global.mivariable = "el valor" //*! utilizar lo menos posible
console-log(mivariable)

this === global