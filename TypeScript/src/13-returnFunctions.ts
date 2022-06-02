(() => {

  // const calcTotal = (prices: number[]): string => { //*? retorno explicito
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item) => total += item);
    return total
    // return total.toString()
  }

  // const calcTotal = (prices: number[]): void => { //*? forma explicita
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`)
    // return rta
  }

  const rta = calcTotal([1,1,7,3,4,3]);
  console.log(`El total es ${rta}`)
  printTotal([1,1,7,3,4,3]);

})();
