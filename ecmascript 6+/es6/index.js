//*!---Funciones-----
//*tradicional
function newFunction (name, age, country){
    var name = name || 'cristian';
    var age = age || 24;
    var country = country || 'MX';
    console.log(name,age, country);
}

//*es6
function newFunction2(name = 'cristian', age= 24, country = 'MX'){
    console.log(name,age,country);
};
newFunction2();
newFunction2('Ricardo', 23, 'CO');

//*!---Concatenación-----
let hello = "Hello";
let world = "World";
let epicPhrase = hello+''+world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//*!---Multilinia strings-----
let lorem = "Vivimos en las sombras para servir a la luz, \n"
+ "somos assasin's."
let loremES6 = `Vivimos en las sombras para servir a la luz,
somos assasin's.
`;
console.log(lorem)
console.log(loremES6)

//*!---Deestructuración-----
let person = {
    'name': 'cristian',
    'age': 24,
    'country': 'MX'
}
console.log(person.name,person.age, person.country);
//ES6
{
let{name, age, country} = person;
console.log(name,age,country);
}
//*!--- Spread Operator -----
let team1 = ['Cristian', 'Mariana', 'Roberto'];
let team2 = ['Varonica', 'Jose Carlos', 'Jorge'];
let education = ['David', ...team1, ...team2];

console.log(education)

//*!--- Let y Const-----
{
    var globalVar = "Global var"
}
{
    let globalLet = "Global let"
}
console.log(globalVar);
console.log(globalLet);
//No se puede cambiar
const a = 'b'

//*!--- Objetos mejorados-----
let name = 'cristian'
let age = 24

obj = {name: name, age:age}
objES6 = {name, age}
console.log(obj)
console.log(objES6)

//*!--- Arrow funtions-----
//Funciones anonimas que retornan un valor
const names = [
    {name: 'Cristian', age: 24},
    {name: 'Ximena', age: 25}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})
let listOfNamesES6 = names.map(item => console.log(item.name))

const listOfNamesES6C = (name, age, country) => {
    //...
}
const listOfNamesES6c2 = num => num*num;

//*!--- Asincronismo-----
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey!')
        }else{
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response =>console.log(response))
    .then(()=> console.log('hola'))
    .catch(error => console.log(error));

//*!--- Clases-----
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

//*!--- Modulos-----
import hello from './module';
hello();

//*!--- Generator-----
function* helloWorld(){
    if(true)(
        yield 'Hello, '
    )
    if(true)(
        yield 'World'
    )
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

