//* file system acceder a nuestros archivos 
//Llamando al modulo con require
const fs = require('fs')

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString())
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err) => {
        if (err){
            console.log( "No puedo escribirlo")
        } else {
            console.log('Se ha escrito correctamente')
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
}

//leer(__dirname + '/archivo.txt', console.log)
//escribir('./modules/archivo2.txt', "Hola, soy un archivo nuevo 🖖", console.log)
//escribir(__dirname + '/archivo2.txt', "Hola, soy un archivo nuevo 👍", console.log)
borrar(__dirname + '/archivo2.txt', console.log)