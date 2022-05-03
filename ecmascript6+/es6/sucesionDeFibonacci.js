
function* fibonacci(){
    var fn1 = 0;
    var fn2 = 1;
    while (true){  
      var actual = fn1;
      fn1 = fn2;
      fn2 = fn2 + actual;
      var reset = yield actual;
      if (reset){          
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 0
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next().value);     // 21
  console.log(secuencia.next().value);     // 34
  console.log(secuencia.next().value);     // 55