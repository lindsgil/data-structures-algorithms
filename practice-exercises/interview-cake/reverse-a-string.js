function reverseString(string) {
  var revArr = [];
  var reversedString = string.split('');
  for(var i = reversedString.length - 1; i > 0; i--) {
    revArr.push(reversedString[i]);
  }
  return revArr.join('');
}

//alternative way to reverse string 'in place' by swapping characters

//Time complexity is O(n) time since we are iterating through n values of the string
//Space complexity is O(1)
function reverseStringInPlace(string) {
  var stringArray = string.split('');
  var startIndex = 0;
  var endIndex = string.length - 1;

  while( startIndex < endIndex) {
    //swap characters
    var temp = stringArray[startIndex];
    stringArray[startIndex] = stringArray[endIndex];
    stringArray[endIndex] = temp;

    //move towards the middle
    startIndex++;
    endIndex--;
  }
  return stringArray.join('');
}
