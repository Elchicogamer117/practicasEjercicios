// const p = require("process")  //* <- unnecessary (global)

process.on('beforeExit', () => { //*? <- listening
    console.log('Process almost finish')
})

process.on('exit', () => {  //*? Disconnected from the main thread
    console.log('Well, the process has finished')
    setTimeout(() => {
        console.log('This never show') 
    },0)
})

setTimeout(() => {
    console.log('This is shown')
},0)

process.on('uncaughtException', (err, origin) => {
    console.log('Ok, we forget catch the bug')
    //console.log(err)
    setTimeout(() => {
        console.log('This come from exceptions')
    },1000)
})

//functionNonexisting()

console.log("If error didn't catch, this don't show")