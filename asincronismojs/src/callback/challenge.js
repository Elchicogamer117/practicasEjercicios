let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let apiRickAndMorty = 'https://rickandmortyapi.com/api/character/';

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
    xhttp.send();
}

fetchData(apiRickAndMorty, function(error1, data1){
    if (error1) return console.error(error1);
    fetchData(apiRickAndMorty + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

            console.log(apiRickAndMorty);
            console.log(apiRickAndMorty + data1.results[0].id); 
            console.log(data2.origin.url); 
        });
    });
});
