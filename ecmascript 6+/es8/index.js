//*!--- object properties-----
const data ={
    frontend: 'Cristian',
    backend: 'Jose Carlos',
    design: 'Jorge', // <- Trailing-Comas, puede haber o no addicion de elementos
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data);
console.log(values)
console.log(values.length)

//*!--- pading-----

const string = 'hello';
console.log(string.padStart(8,'hi '))
console.log(string.padEnd(12,' :) u.u'))

//*!--- async & await-----

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => {
            resolve('Hello World')
        }, 3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();



