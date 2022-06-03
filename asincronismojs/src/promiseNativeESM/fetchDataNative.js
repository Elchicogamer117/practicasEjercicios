import { get } from 'https';

export const fetchDataNative = (urlAPI) => {
    return new Promise((resolve, reject) => {
        get(urlAPI, (res) => {
            res.setEncoding('utf8');
            if(res.statusCode === 200) {
                let body = '';
                res.on('data', (data) => {
                    body += data;
                });
                res.on('end', () => { 
                    resolve(JSON.parse(body));
                });
            } else {
                reject(new Error(`Error  ${urlAPI}. Status ${res.statusCode}`));
            } 
        });
    });
}