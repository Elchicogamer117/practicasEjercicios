//*!--- Niveles de profundidad-----
let array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(2)); //*<-Niveles que aplana
console.log(array.flatMap(value => [value, value*2])); //*<-Mapea a travez de funciones

//*!---Propiedades de espaciado-----
let hello = '    hello world    ';
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())
console.log(hello.trim())

//*!--- Optional cath error-----
try{

} catch{
    error
}

//*!--- Arrelgos a objetos-----
let entries = [["name","cristian"], ["age",32]];
console.log(Object.fromEntries(entries));

//*!--- Descripcion del simbolo-----
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


