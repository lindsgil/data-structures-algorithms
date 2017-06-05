'use strict';

//practice calculating time complexity

function countChars(str) {  //O(1) constant
  let count = 0; //constant

  for(let i=0; i<str.length; i++) { //O(n) linear
    count++;
  }
  return count; //constant
};

// function countChars is Big O (n) linear

var countCharss = function(str) {
  return str.length; //must know how string.length works, .length is a property lookup meaning it is constant
}; //O(1) constant for countCharss bc property lookups are constant Big O

//calculate time complexity for native methods
var myList = ['hello', 'goodbye'];

myList.push('sup'); // constant O(1)

myList.unshift(); // linear O (n)
