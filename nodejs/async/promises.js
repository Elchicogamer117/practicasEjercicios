function hola(name){
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

console.log('Iniciando proceso...')
hola('Cristian')
      .then(hablar)
      .then(hablar)
      .then(hablar)
      .then(adios)
      .then(() => {
            console.log('Terminamos el proceso...')
      })
      .catch(error => {
            console.error('Ha habido un error:');
            console.error(error);
      })