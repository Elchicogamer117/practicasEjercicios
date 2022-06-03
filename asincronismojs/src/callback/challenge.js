let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(urlAPI, cb){
    let xhttp = new XMLHttpRequest(); //*Instanciando referencia
    xhttp.open('GET', urlAPI, true); //*? por defecto es true
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                cb(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + urlAPI);
                return cb(error, null);
            }
        }
    }
    xhttp.send
}
