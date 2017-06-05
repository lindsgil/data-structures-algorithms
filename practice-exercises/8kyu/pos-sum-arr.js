'use strict';

//You get an array of numbers, return the sum of all of the positive ones
//ex [1, -4, 7, 12] => 1 +7 + 12 = 20

function positiveSum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
};

//refactored solution

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0? b : 0), 0);
};
