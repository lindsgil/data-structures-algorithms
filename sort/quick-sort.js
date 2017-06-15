'use strict';

//declare partition
function partition(arr, lo, hi) {
  let pivot = arr[hi];
  let pivotLoc = lo;
  for( let i = lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }
  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

function quickSort(array, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = array.length;

  if(lo < hi) {
    let p = partition(array, lo, hi);

    quickSort(array, lo, p-1);
    quickSort(array, p+1, hi);
  }

  if (hi-lo === array.length-1) return array;
}
