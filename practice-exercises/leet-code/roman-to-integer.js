var romanToInt = function(s) {
  let dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  if(s.length === 1) {
    return dictionary[s];
  }
  let intRes = 0;
  for(let i = 0; i < s.length - 1; i++) {
    if(dictionary[s[i+1]] > dictionary[s[i]]) {
      intRes -= dictionary[s[i]];
      console.log(dictionary[s[i]]);
    } else {
      intRes += dictionary[s[i]];
    }
  }
  return intRes + dictionary[s[s.length - 1]];
}
