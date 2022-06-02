(() => {

  type Sizes =  'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }
  const product:Product[] = [];

  const addProduct = (data: Product) => {
    product.push(data)
  }

  addProduct({
    title: 'Halo CE',
    createAt: new Date(2001, 10, 15),
    stock: 343
  });
  addProduct({
    title: 'Halo shirt ',
    createAt: new Date(2001, 12, 10),
    stock: 117,
    size:'XL'
  });
   console.log(product)
  //  product.push('Halo 2');
  //  product.push(true);
  product.push({
    title: 'Halo 2 ',
    createAt: new Date(2004, 10, 9),
    stock: 216,
  });
  console.log(product)

})();
