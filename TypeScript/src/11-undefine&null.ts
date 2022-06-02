(()=>{
  //* No pertenencen a ningun tipo
  // let myNumber: number = undefined;
  // let myString: string = null
  //* El motor de inferencia los asigna como any
  // let myNull = null;
  // let myUndefined = undefined;
  //* Se pueden asignar de forma explicita, pero no es muy comun
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  //* Su principal uso es en los union type
  let myNumber: number | null = null; //*? En muchos frameworks es comun que la variable se trate como null hasta que se cargue el template
  myNumber = 117;

  let myString: string | undefined = undefined;
  myString = 'John';

  function hi(name: string | null){
    let hello = 'Hola ';
    if (name){
      hello += name.toLowerCase()
    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }
  //Optional change
  function hiOC(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody'
    console.log(hello);
  }

  hi('Cristian');
  hi(null);
  hiOC('Cristian');
  hiOC(null);

})();
