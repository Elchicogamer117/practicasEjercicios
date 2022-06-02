(()=>{
  // let spartans = [117,125,58]; //*? Si se declara implicitamente, solo se le podra agregar este tipo de datos
  let spartans = ['John', 117, 'Kai', 125, 'Linda', 58, true];
  spartans.push('john');
  spartans.push(true);
  // spartans.push({john: 117});
  // spartans.push(104);
  spartans = [42,130,87];

  //*Para trabajar con datos no iniciales forzosamente debe ser explicito
  let citizens: (string | number | boolean | Object)[] = ['Jonhson', 780] //*! El tipo 'Object' tambien validaa arrays internos
  citizens.push('Kat');
  citizens.push(320);
  citizens.push(true);
  citizens.push({
    cortana: 4529,
    citizens: false
  });
  citizens.push(['John', 117, 'Kai', 125, 'Linda', 58, true]);

  let numbers = [343,216,4529,409871];
  // let numbers = [343, 'echo',216,4529,409871]; //*? Nos permite hacer validacion de operaciones

  numbers.map(item => item**2);
})();
