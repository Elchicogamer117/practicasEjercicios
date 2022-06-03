import { fetchDataNative } from "./fetchDataNative.js";
let apiRickAndMorty = 'https://rickandmortyapi.com/api/character/';

fetchDataNative(apiRickAndMorty)
    .then(data=> {
        console.log(data.info.count)
        return fetchDataNative(`${apiRickAndMorty}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name)
        return fetchDataNative(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.error(error));