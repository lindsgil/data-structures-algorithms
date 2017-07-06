function findTheFactorial(num) {
  if(num === 0) return 1;
  let product = 1;
  let counter = 1;
  while(num >= counter) {
    product *= counter;
    counter++;
  }
  return product;
}

findTheFactorial(1);
