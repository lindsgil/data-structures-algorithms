var isPalindrome = function(x) {
  let emptArr = [];
  let preRev = x.toString().split('');
  for(let i = preRev.length - 1; i >= 0; i--) {
    emptArr.push(preRev[i]);
  }
  let reversal = parseInt(emptArr.join(''));
  if(x < 0) {
      reversal = reversal * (-1);
  } else {
    reversal = reversal;

  }
  console.log(reversal);
  if(reversal == x) return true;
  else return false;
};
