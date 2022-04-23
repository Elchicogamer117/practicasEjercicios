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

function adios(name, otroCallback){
      setTimeout(() => {  
            console.log(`Adios ${name} 🖐`)
            otroCallback()
      }, 1000)
}