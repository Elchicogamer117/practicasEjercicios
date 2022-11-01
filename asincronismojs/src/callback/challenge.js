const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const apiRickAndMorty = 'https://rickandmortyapi.com/api/character/';

function fetchData( urlAPI, callback ) {
    let xhttp = new XMLHttpRequest(); //*Instanciando referencia
    xhttp.open('GET', urlAPI, true); //*? por defecto es true
    xhttp.onreadystatechange = () => {
        if ( xhttp.readyState === 4 ) {
            if ( xhttp.status === 200 ) {
                callback( null, JSON.parse(xhttp.responseText) );
            } else {
                const error = new Error(`Error: ${urlAPI}`);
                return callback( error, null );
            }
        }
    }
    xhttp.send();
}

fetchData( apiRickAndMorty, ( error1, data1 ) => {
    if ( error1 ) return console.error(error1);

    fetchData( apiRickAndMorty + data1.results[2].id, ( error2, data2 ) => {
        if ( error2 ) return console.error(error2);

        fetchData( data2?.origin.url, ( error3, data3 ) => {
            if ( error3 ) return console.error(error3);
            console.log(`personajes: ${data1.info.count}`);
            console.log(`nombre: ${data2.name}`);
            console.log(`dimensión: ${data3.dimension}`);

            console.log(apiRickAndMorty);
            console.log(apiRickAndMorty + data1.results[1].id); 
            console.log(data2.origin.url); 
        });
    });
});
