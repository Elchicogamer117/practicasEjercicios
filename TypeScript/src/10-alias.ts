(()=>{
  // let userID: string | number | boolean;
  // type UserID = string | number | boolean;
  type UserID = string | number
  let userID: UserID;

  //* Literal types
  // let shirtSize: string;
  type Sizes =  'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'Moster';
  // shirtSize = 'Minion';

  function greeting(myText: UserID, size:Sizes ){
    if (typeof myText === 'string'){
      console.log(`string: ${myText.toLowerCase()}`)
    } else {
      console.log(`number: ${myText.toFixed(2)}`)
    }
  }
  greeting('John', 'XL')
  // greeting(1.17343, 'Moster')
})();
