function sum(num1, num2){
    return num1 + num2
}
function calc(num1, num2, cb){
    return cb(num1, num2)
}
console.log(calc(6,12,sum));

function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date
        callback(date)
    },4000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);