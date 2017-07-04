//Get the nth Fibonacci Number
//Fibonacci Sequence: the value of the index is the sum of the previous two values

//O(n) Solution
function fibonacci(n) {
  //start fibonacci sequence with signature
  var fibArr = [0,1];
  //base case
  if(n <= 2) return 1;

  for(let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n];
}

//Recursive Solution
//Run time is O(2^n)
function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);
}

//Details about the recursive time complexity
// You model the time function to calculate Fib(n) as sum of time to calculate Fib(n-1) plus the time to calculate Fib(n-2) plus the time to add them together (O(1)).
//
// T(n<=1) = O(1)
//
// T(n) = T(n-1) + T(n-2) + O(1)
//
// You solve this recurrence relation (using generating functions, for instance) and you'll end up with the answer.
//
// Alternatively, you can draw the recursion tree, which will have depth n and intuitively figure out that this function is asymptotically O(2n). You can then prove your conjecture by induction.
//
// Base: n = 1 is obvious
//
// Assume T(n-1) = O(2n-1), therefore
//
// T(n) = T(n-1) + T(n-2) + O(1) which is equal to
//
// T(n) = O(2n-1) + O(2n-2) + O(1) = O(2n)
//
// However, as noted in a comment, this is not the tight bound. An interesting fact about this function is that the T(n) is asymptotically the same as the value of Fib(n) since both are defined as
//
// f(n) = f(n-1) + f(n-2).
//
// The leaves of the recursion tree will always return 1. The value of Fib(n) is sum of all values returned by the leaves in the recursion tree which is equal to the count of leaves. Since each leaf will take O(1) to compute, T(n) is equal to Fib(n) x O(1). Consequently, the tight bound for this function is the Fibonacci sequence itself (~θ(1.6n)). You can find out this tight bound by using generating functions as I'd mentioned above.
