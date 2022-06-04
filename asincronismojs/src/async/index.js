const doSthAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something async'), 4000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async() => {
    const something = await doSthAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

const anthFunc = async () => {
    try {
        const something = await doSthAsync();
        console.log(something);
    } catch(error) {
        console.error(error)
    }
}

console.log('before two');
anthFunc();
console.log('after two');
