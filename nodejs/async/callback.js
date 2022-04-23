// function soyAsincrona(myCallback){
//       //console.log('Hola, soy una funcion asincrona')
//       setTimeout(() => {  //* <- Esto es un Callback
//             console.log('Estoy siendo asincrona')
//             myCallback() //* <- Esto es mi Callback
//       }, 1000)
// }

// console.log('Iniciando proceso...')
// soyAsincrona(() => {console.log('Termiando proceso...')})


function hola(name, myCallback){
      //console.log('Hola, soy una funcion asincrona')
      setTimeout(() => {  //* <- Esto es un Callback
            console.log(`Hola ${name} 🖐`)
            myCallback(name) //* <- Esto es mi Callback
      }, 2000)
}

function adios(name, otroCallback){
      setTimeout(() => {  
            console.log(`Adios ${name} 🖐`)
            otroCallback()
      }, 1000)
}

console.log('Iniciando proceso...')
hola('Cristian',(name) => {
      adios(name, () => {
            console.log('Termiando proceso...')
      })
})

//*! Si no se anidan, se ejecutan erroneamente
// hola('Cortana',() =>{})
// adios('Cortana',() =>{console.log('Termiando proceso...')})