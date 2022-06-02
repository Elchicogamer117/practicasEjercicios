(()=>{
  let userID: string | number; //*Darle cierta flexibilidad, no tanta como un any
  userID = 117;
  userID = 'alphaSierraFoxtrot'

  //*Para acceder a los metodos de cada tipo, usamos guardianes
  function greeting(myText: string | number ){
    if (typeof myText === 'string'){
      console.log(`string: ${myText.toLowerCase()}`)
    } else {
      console.log(`number: ${myText.toFixed(2)}`)
    }
  }
  greeting('John')
  greeting(1.17343)
})();
