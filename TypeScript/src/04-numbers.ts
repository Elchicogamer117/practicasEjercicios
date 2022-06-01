(() => {
  //* Implicito
  let productPrice = 343;
  productPrice = 216;
  console.log('productPrice', productPrice);

  //* Explicito
  let customerAge:number = 117;
  customerAge += '1';
  console.log('customerAge', customerAge);

  let productInStock:number; //*? Cuando solo declaras una variable es obligatirio hacerlo de forma explicita
  console.log('productInStock', productInStock);
  if (productInStock > 0){
    console.log('Its available')
  }

  let discount = parseInt('SaaS') //*? Lo toma como NaN ya que puede ser considerado como numero
  console.log('discount', discount);
  if(discount <= 200){
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfhf;
  console.log('hex', hex);
  let bin = 0b0117;
  console.log('hex', hex);

  const myNumber: Number = 10 //*?Number es de tipo objeto, funciona en la mayoria de los casos pero no es correcto

})();
