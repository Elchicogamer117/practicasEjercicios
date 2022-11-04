import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data     = await response.json();
  return data;
}

const anotherFunction = async ( urlApi ) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product  = await fetchData(`${urlApi}/products/${products[24].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(`Productos: ${products.length}`);
    console.log(`Producto #25: ${product.title}`);
    console.log(`Categoría: ${category.name}`);
    console.log(products[24]);
  } catch ( error ) {
    console.error( error );
  }
}

anotherFunction(API);