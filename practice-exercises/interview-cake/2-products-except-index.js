// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

//O(n) Time and space
function getProductOfAllIntsExceptIndex(array) {
  if(array.length < 2) {
    throw new Error('getting the products of other indices requires at least 2 numbers');
  }
  var getProductOfAllIntsExceptIndex = [];
  var productSoFar = 1;
  for(var i = 0; i < array.length; i++) {
    getProductOfAllIntsExceptIndex[i] = productSoFar;
    productSoFar *= array[i];
  }
  //for each integer we find the product of all integers that come after it, since each index in products already has the product of the integers before it, now we're storing the product of all other integers
  productSoFar = 1;
  for(var j = array.length - 1; j >= 0; j--) {
    getProductOfAllIntsExceptIndex[j] *= productSoFar;
    productSoFar *= array[j];
  }
  return getProductOfAllIntsExceptIndex;
}

getProductOfAllIntsExceptIndex([2,4,5,6]);
