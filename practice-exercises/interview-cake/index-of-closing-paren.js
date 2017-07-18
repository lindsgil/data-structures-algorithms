//find index of closing parenthesis, if given a string and an index of the opening parenthesis

function findClosingParen(string, n) {
  if(string.length < 2) {
    throw new Error('not valid!');
  }
  var parenCounter = 0;
  for(var i = n + 1; i < string.length; i++) {
    if (string[i] === '(') {
      parenCounter += 1;
      } else if (string[i] === ')') {
        if(parenCounter === 0) {
          return i;
        } else {
          parenCounter -= 1;
          }
      }
  }
}

findClosingParen('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',10);
//will return 79
