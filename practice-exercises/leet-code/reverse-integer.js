var reverse = function(x) {
  let emptArr = [];
  let preRev = x.toString().split('');
  for(let i = preRev.length - 1; i >= 0; i--) {
    emptArr.push(preRev[i]);
  }
  if(x < 0) {
      return parseInt(emptArr.join('')) * (-1);
  } else
  return parseInt(emptArr.join(''));
};
