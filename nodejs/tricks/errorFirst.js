
function async(callback){
    setTimeout(() =>{
        try{
            let a= 3 + z
            callback(null, a)
        } catch (err){
            callback(err, null)
        }
    }, 1000)
}

try {  //* Catch error in async function but not outside
    async((err, data) => {
        if (err){
            console.error('We have a error')
            console.error(err)
            return false
            // throw err //*! Don't work in async
        }
    
        console.log('All good, all right, my data is', dato)
    })
} catch (err){
    console.error('We have catched a error')
    console.error(err)
}
