(() => {
  //* Implicito
  let productPrice = 343;
  productPrice = 216;
  console.log('productPrice', productPrice);

  //* Explicito
  let customerAge:number = 117;
  customerAge += 1;
  console.log('customerAge', customerAge);

  let productInStock:number = 10;
  console.log('productInStock', productInStock);
  if (productInStock > 0){
    console.log('Its available')
  }

  let discount = parseInt('117')
  console.log('discount', discount);
  if(discount <= 200){
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b011;
  console.log('hex', hex);

  const myNumber: number = 10;

})();
