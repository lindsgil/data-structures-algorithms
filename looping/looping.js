'use strict';

let loopNTimes = function(n) {
  console.log('n equals ', n)
  if(n <=1 ) {
    return 'complete';
  }
  return loopNTimes(n-1);
}
loopNTimes(3);
