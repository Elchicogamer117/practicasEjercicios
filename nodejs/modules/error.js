function otherFuntion(){
      return crash()
}

function crash(){
      return 3 + z
}

function asyncCrash(cb){ //*! Como se ejecuta en otro hilo, no se captura
      setTimeout(() => {
            try{
                  return 3 + z
            } catch(err) {
                  console.log('Error in my async function')
                  cb(err)
            }
      })
}

try{
      asyncCrash((err) => {
            //console.log('There is error')
            console.log(err.message)
      })
} catch(err) {
      console.log('Stg wrong')
      console.error(err.message)
      console.log("Don't worry, we catched")
}

console.log('System flow')
