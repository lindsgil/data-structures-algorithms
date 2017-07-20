// I have an array of n + 1n+1 numbers. Every number in the range 1..n1..n appears once except for one number that appears twice.
// Write a function for finding the number that appears twice.

function findingDoubleNumber(array, n) {
  var nSquared = Math.pow(n,2);
  var firstSum = (nSquared + n) / 2;
  console.log(firstSum);
  var secondSum = array.reduce(function(a,b) {
    return a + b;
  });
  return secondSum - firstSum;
}

findingDoubleNumber([1,2,3,3,4,5], 5);
