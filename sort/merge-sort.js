'use strict';

function mergeSortRecursive (array) {
  //base case
  if(array.length <= 1) return array;

  //divide and conquer
  let leftHalf = array.slice(0, array.length/2);
  let rightHalf = array.slice(array.length/2);
  let leftSorted = mergeSortRecursive(leftHalf);
  let rightSorted = mergeSortRecursive(rightHalf);

  //merge subarrays
  return merge(leftSorted, rightSorted);
};

function merge(left, right) {
  let result = [], iLeft = 0, iRight = 0;

  //while result is not fully populated
  while (result.length < (left.length + right.length)) {
    // if all elements in left have been added, then add remaining right elements
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    //if all elements in right have been added, add remaining left elements
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    //compare elements in subarrays and add lower of the two to result
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
}
