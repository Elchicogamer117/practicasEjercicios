import { XMLHttpRequest } from 'xmlhttprequest';

const fetchData = (urlAPI) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlAPI, true); 
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error( `Error ${urlAPI}`))
            }
        }
        xhttp.send();
    });
}

export default fetchData;