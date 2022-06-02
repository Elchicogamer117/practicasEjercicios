(()=>{
  let myDynamicVar: any; //*? Desactivamos el sistema de chekeo de TypeScript
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';
  //*? Al ser un any ya no se cuentan con las ayudas de metodos de tipo
  myDynamicVar = 'Hola'
  console.log(myDynamicVar.toLowerCase())

  //*? Para acceder a ellas podemos hacer un cast:
  const rta = (myDynamicVar as string).toLowerCase()
  console.log(rta)

  myDynamicVar = 117;
  const rta2 = (<number>myDynamicVar).toFixed(2)
  console.log(rta2)

})();
