var table = [
      {
            id:117,
            name:'john'
      },
      {
            id: 125,
            name: 'kai'
      }
]

//console.log('Show stg')
//console.error('Error custom')
// console.log(table)
// console.table(table)

/* 
console.group('Conversacion:')
console.group('Jefe:')
console.log('Que pasa')
console.groupEnd('Jefe:')
console.group('Cortana:')
console.log('Te lo he contado alguna vez')
console.log('elegi al spartan que quise...')
console.groupEnd('Cortana:')
console.log('*Interferencia*')
console.groupEnd('Conversacion:')
console.log('Sierra 117 informe..')
*/

function function1(){
      console.group('function1')
      console.log('Esto es de la funcion 1')
      console.log('Esto tambien')
      function2()
      console.log('Hemos vuelto a la funcion 1')
      console.groupEnd('function1')
}

function function2(){
      console.group('function2')
      console.log('Ahora estamos en la funcion 2')
      console.groupEnd('function2')
}

// console.log('empezamos')
// function1()


console.count('Stg')
console.count('Stg')
console.count('Stg')
console.countReset('Stg')
console.count('Stg')
console.count('Stg')
