'use strict';

//wrapper function is a function inside of another function
function runRecursiveLoop(start, end) {
  function recurse(i) {
    console.log(i);
    if(i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

function runLoopAsMyself(i, end) {
  console.log(i);
  if(i < end) {
    runLoopAsMyself(i + 1, end);
  }
}
