let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'no web home'

console.log('Hola ' + nombre)
console.log(`Mi web es ${web}`)