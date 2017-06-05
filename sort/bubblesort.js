'use strict';

function bubbleSort(array) {
  //while wall > 0
  let wall = array.length; //first sorted element
  //iterate through array up to wall
  while (wall >= 0 ) {
    //if next value < current, swap
    for (var i=0; i<wall; i++) {
      if (array[i] > array[i+1]) {
        array = swap(array, i, i+1);
      }
    }
    wall--;
  }
  return array;
};

function swap(arr, i1, i2) {
  //bitwise swap
}
