const fs = require('fs')
const stream = require('stream')
const util = require('util')

//* stream reading
// let data = ''
let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('utf8')
// readableStream.on('data', (chunk) => {
//     data += chunk //console.log(chunk.toString())
// })

// readableStream.on('end', () => {
//     console.log(data) //* difference in memory
// })

//* stream writing
// process.stdout.write('Hi')
// process.stdout.write('everyone')
// process.stdout.write('🖖')

//* stream double ------
const transform = stream.Transform

//*? ES6 version
class MAYUS extends transform {
      constructor() {
            super();
            transform.call(this);
      }
      _transform = (chunk, codif, cb) => {
            let chunkMayus = chunk.toString().toUpperCase();
            this.push(chunkMayus);
            cb();
      };
}

/* traditional form
function MAYUS(){
    transform.call(this)
}
util.inherits(MAYUS, transform)

MAYUS.prototype._transform = (chunk, codif, cb) => {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}
*/

let mayus = new MAYUS()
readableStream
    .pipe(mayus)
    .pipe(process.stdout)
