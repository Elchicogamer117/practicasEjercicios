//const exec = require('child_process').exec
const { exec, spawn } = require('child_process')
const { stdout, stderr } = require('process')

//se puede ejecutar cualquier comando
//exec('ls -la', (err, stdout, stderr) => {
/*
exec('node modules/console.js', (err, stdout, stderr) => {
      
      if  (err){
            console.log(err)
            return false
      }

      console.log(stdout)
})
*/

let process = spawn('ls', ['-la'])
//console.log(process) // Similar al console del sistema, pero ejecuta su propio script
console.log(process.pid) //Cada ejecucion tiene su propio id
console.log(process.connected)

//Detectamos datos, nos arroja el mismo resultado que exec
process.stdout.on('data', (data) => {
      console.log('Its kill?')
      console.log(process.killed)
      console.log(data.toString())
})

process.on('exit', () => {
      console.log('Process finished')
      console.log(process.killed)
})
