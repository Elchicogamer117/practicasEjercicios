import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Halo CE',
  createAt: new Date(2001, 11, 15),
  stock: 343
});
addProduct({
  title: 'Halo shirt ',
  createAt: new Date(2001, 12, 10),
  stock: 117,
  size:'XL'
});
console.log(products)
console.log(calcStock())
