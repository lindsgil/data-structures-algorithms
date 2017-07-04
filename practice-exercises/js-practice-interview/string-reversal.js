//reverse a string

function reverse(str){
  var rtnStr = '';
  for(var i = str.length - 1; i >= 0;i--){
    rtnStr += sstr[i];
  }
  return rtnStr;
}

//alternative O(n) solution
function reverse(str){
  var rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  for(var i = str.length - 1; i >= 0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}

//looping through half the index
function reverse(str) {
  str = str.split('');
  var len = str.length,
    halfIndex = Math.floor(len / 2) - 1,
    revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}

//recursively
function reverse (str) {
  if (str === '') {
    return '';
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
