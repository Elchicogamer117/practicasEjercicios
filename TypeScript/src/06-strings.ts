(()=>{
  let productTitle = 'Halo the serie'
  // productTitle = null
  // productTitle = () => {}
  // productTitle = 123

  // const productDescription = ' I'ts amazing '
  const productDescription = ' I\'ts amazing '
  // const productDescription =  " I'ts amazing "

  let productPrice = 343;
  let isNew = true;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `
  console.log(summary);
})();
