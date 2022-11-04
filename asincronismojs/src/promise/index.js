const sthllhppn = () => {
    return new Promise (( resolve, reject ) => {
        if (true) {
            resolve('Yeeih! 😃');
        } else {
            reject('No yeih 😣');
        }
    });
};

sthllhppn()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const sthllhppn2 = () => {
    return new Promise (( resolve, reject ) => {
        if (true) {
            setTimeout(() => {
                resolve('Yeeih! 😃');
            },2000)
        } else {
            const error = new Error('No yeih 😣')
            reject(error);
        }
    });
};

sthllhppn2()
    .then(response => console.log(response))
    .then(() => console.log('Hi'))
    .catch(err => console.error(err));

Promise.all([sthllhppn(), sthllhppn2()])
    .then(response => {
        console.log('Array if results ', response);
    })
    .catch(err => {
        console.error(err);
    })
    