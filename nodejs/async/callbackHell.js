function hola(name, myCallback){
      setTimeout(() => {  
            console.log(`Hola ${name} 🖐`)
            myCallback(name)
      }, 2000)
}

function hablar(callCallback){
      setTimeout(() =>{
            console.log('Te lo he contado alguna vez...')
            callCallback()
      },1500)
}

//* Para evitar grandes anidamientos, creamos una funcion recursiva 
function conversacion(name, times, callback){
      if (times > 0){
            hablar(() => {
                  conversacion(name, --times, callback)
            })
      } else {
            adios(name,callback)
      }
      
}

function adios(name, otroCallback){
      setTimeout(() => {  
            console.log(`Adios ${name} 🖐`)
            otroCallback()
      }, 1000)
}

//*----------- main.js ---------

console.log('Iniciando proceso...')

hola('Cristian',(name) => {
      conversacion(name, 3, () => {
            console.log('Proceso terminado')
      })
})

// hola('Cristian',(name) => {
//       hablar(() => {
//             hablar(() => {
//                   hablar(() => {
//                         adios(name, () => {
//                               console.log('Termiando proceso...')
//                         })
//                   })
//             })
//       })
// })

