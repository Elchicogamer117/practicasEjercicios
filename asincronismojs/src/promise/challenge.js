import fetchData from '../utils/fetchData.js';
let apiRickAndMorty = 'https://rickandmortyapi.com/api/character/';

fetchData(apiRickAndMorty)
    .then(data => {
        console.log(data.info.count) 
        return fetchData(`${apiRickAndMorty}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.error(error));