//let buffer = Buffer.alloc(4) //*simple: assing memory space
//let buffer = Buffer.from([1, 2, 5, 12]) //*save data

//let buffer = Buffer.from('Hi everyone 🖖')

// console.log(buffer)
// console.log(buffer.toString())

//* --Abecedario--

let abc = Buffer.alloc(26)
// console.log(abc)

for (let i = 0; i <26; i++){
    abc[i] = i + 97  //*? 97 == A ascii
}
console.log(abc.toString())
