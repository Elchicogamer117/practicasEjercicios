//*!--- Spread Operator-----
const obj = {
    name: 'cristian',
    age: 24,
    country: 'MX'
}
let{name, ...all} = obj;
console.log(name, all);

//*!--- Porpagation Properties-----
const obj1 = {
    name: 'cristian',
}
const obj2 = {
    ...obj1,
    country: 'MX',
}
console.log(obj2)

//*!--- Promise Finally-----
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {resolve('Hello World')}, 3000)
        : reject(new Error('Test Error'))
    })
};

//*!--- Regex-----
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2021-03-13');
 const year = match[1]
 const month = match[2]
 const day = match[3]

 console.log(year, month,day);
 