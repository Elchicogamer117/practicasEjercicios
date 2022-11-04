 
const vacas = 18;

const contarVacas = new Promise(( resolver, rechazar ) => {
if (vacas > 10) {
    resolver(`Tenemos ${vacas} vacas en la granja`);
} else {
    rechazar("No hay suficientes vacas");
}
});

contarVacas.then( resultado => {
console.log(resultado);
}).catch( error => {
console.log(error);
}).finally(() => console.log('Proceso terminado'));