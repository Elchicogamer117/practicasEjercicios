(() => {

  type Sizes =  'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date, //*? Unico objeto que no arroja alerta en TS
    stock: number,
    size: Sizes,
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const createProductToJsonOC = (
    title: string,
    createAt: Date, //*? Unico objeto que no arroja alerta en TS
    stock: number,
    size?: Sizes,
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'L');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.size);

  const product2 = createProductToJsonOC('P2', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);

})();
