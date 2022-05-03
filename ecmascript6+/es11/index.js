//*!--- Dinamic import-----
const buttom =document.getElementById("btn");

buttom.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

//*!--- Big int-----
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991)

console.log(bigNumber);
console.log(anotherBigNumber);

//*!--- Promise all solve-----
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(Response => console.log(Response))

//*!--- global this-----
console.log(globalThis)

//*!--- operador null-----
const fooo = null ?? 'default string';
console.log(fooo);

//*!--- optional cheining-----
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('enail');
} else {
    console.log('fail');
}

