console.time('allCode')
let suma = 0

console.time('bucle')
for(let i = 0; i<100000000; i++){
    suma += 1 
}
console.timeEnd('bucle')

console.time('async')
console.log('Start async process')

async()
    .then(() =>{
        console.timeEnd('async')
    })

console.timeEnd('allCode')
function async(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Finish async function')
        resolve()
        })
    })
}