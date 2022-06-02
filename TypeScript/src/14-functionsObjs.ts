(() => {
  // const login = (email: string, password: number) => {
  //   console.log(email, password)
  // }
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  // login('elchicogamer@git.com', 117343216)
  login({
    email:'elchicogamer@git.com',
    password: 117343216
  });


  type Sizes =  'S' | 'M' | 'L' | 'XL';
  const product:any = []; //*Inferido como any

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    product.push(data)
  }

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
   console.log(product)

})();
