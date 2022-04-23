async function hola(name){  //*! NO es necesario el async dado que no se esta utlizando 'await' dentro de la funcion
      return new Promise((resolve, reject) => {
            setTimeout(() => {  
                  console.log(`Hola ${name} 🖐`)
                  resolve(name)
            }, 2000)
      })
      
}

function hablar(name){
      return new Promise((resolve, reject) => {
            setTimeout(() => {  
                  console.log(`Te lo he contado alguna vez...`)
                  resolve(name)
                  //reject('No se pudo procesar la conversacion')
            }, 1500)
      })
}

function adios(name){
      return new Promise((resolve, reject) => {
            setTimeout(() => {  
                  console.log(`Adios ${name} 🖐`)
                  resolve()
            }, 1000)
      })
}

//*----------- main.js ------------

async function main(){
      let name = await hola('Cristian')
      await hablar()
      hablar()    //*? <- NO da la pauta y se ejecuta al mismo tiempo que la siguiente funcion
      await hablar()
      await adios(name)
      console.log('Termina proceso...')
}

console.log('Empezamos el proceso...')
main()
console.log('Esta es la segunda linea de ejecucion')
