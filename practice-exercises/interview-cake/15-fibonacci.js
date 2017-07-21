// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.

//recursive is clean and easy to write but very slow time complexity is exponential (bad)
function fiboRecursive(n) {
  //base case
  if(n === 0 || n === 1) {
    return n;
  }
  return fiboRecursive(n - 2) + fiboRecursive(n - 1);
}

//to optimize time complexity, use memoization so that we are not computing the same values over and over again as we do with the above solution

function Fibber() {
  this.memo = {};
}

Fibber.prototype.fib = function(n) {
  if (n < 0) {
    throw new Error ('negative index does not exist');
  } else if (n === 1 || n === 0) { //base case
    return n;
  }
  //see if we have already calculated this
  if (this.memo.hasOwnProperty(n)) {
    console.log('grabbing memo [' + n + ']');
    return this.memo[n];
  }

  console.log('computing fib(' + n + ')');
  var result = this.fib(n - 2) + this.fib(n - 1);

  //memoize
  this.memo[n] = result;

  return result;
};

//bottom up approach for optimized time and space
//O(n) time and O(1) space
function fib(n) {
  if (n < 0) {
    throw new Erorr('negative index does not exist');
  } else if (n === 1 || n === 0) {
    return n;
  }

  var prevPrev = 0;
  var prev = 1;
  var current;

  for (var i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
