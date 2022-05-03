//*!--- Remplace all-----

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
const replacedAllString = string.replaceAll("JavaScript", "Python");
console.log(replacedString);
console.log(replacedAllString);

//*!--- Metodos privados----
class Message {
    #show(val){ // Con # convertimos al método en privado
        console.log(val);
    }
};

const message = new Message();
message.show('Hola!');

//*!--- Promise any----
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]) //retorna el valor del que se resueva primiero
    .then(response => console.log(response));

//*!---  WeakRef---- 
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
    //{...}
}

 //*!---  Nuevos operadores lógicos----
let isTrue = true;
let isFalse = false;
let isUd = undefined;

console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isUd &&= isFalse);