//* even or odd
const isOdd = require('is-odd')
isEven = (value) => !isOdd(value) //*? <- Package isEven make this process but is unnecessary, all validations are in isOdd

console.log(isOdd(2))
console.log(isEven(3))