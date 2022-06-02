import { subDays, format } from 'date-fns';

const date = new Date(2001, 10, 15); //*? 0 = enero, 1 = febrero
const rta = subDays(date, 177);
const str = format (rta, 'dd/MM/yyyy');

console.log(`
Fecha completa: ${rta}
Nuevo formato: ${str}
`)
