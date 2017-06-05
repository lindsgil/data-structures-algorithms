'use strict';

function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    resulte *= i;
  }
  return result;
};

// factorial with recursion
function computeFactorialRecursively(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * computeFactorialRecursively(num - 1);
  }
}

computeFactorialRecursively(4); {1}

=== STACK ===

function computeFactorialRecursively(num) { {1} //num===4
  if(num === 1) { //false
    return 1;
  } else {
    return num * computeFactorialRecursively(num - 1); {2}
  }
}

function computeFactorialRecursively(num) { {2} //num===3
  if(num === 1) { //false
    return 1;
  } else {
    return num * computeFactorialRecursively(num - 1); {3}
  }
}

function computeFactorialRecursively(num) { {3} //num===2
  if(num === 1) { //false
    return 1;
  } else {
    return num * computeFactorialRecursively(num - 1); {4}
  }
}

function computeFactorialRecursively(num) { {4} //num===1
  if(num === 1) { //true, will return 1
    return 1;
  } else {
    return num * computeFactorialRecursively(num - 1);
  }
}
