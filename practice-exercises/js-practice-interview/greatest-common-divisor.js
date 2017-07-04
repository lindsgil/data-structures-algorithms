//Find the greatest common divisor between two numbers

//Euclidean Algorithm - greatest common divisor Solution with recursion
var gcd = function(a,b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

//Beginner Solution
function greatestCommonDivisor(a,b){
  var divisor = 2,
    greatestDivisor = 1;
  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
    return 1;

  while(a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}
