//check if the permutation of a string is a palindrome
//do this efficiently by keeping track of odd characters in a javascript Set
//and returning true if string contains 0 or 1 odd number of the same character whiile the rest are even

//This solution has an O(n) time complexity because we are iterating through the string n times
function hasPalindromePerm(string){
  //track characters we have seen an odd number of times by creating a Set
  var myCharSet = new Set();

  for(var i = 0; i < string.length; i++) {
    var char = string[i];

    if(myCharSet.has(char)) {
      myCharSet.delete(char);
    } else {
      myCharSet.add(char);
    }
  }
  //the string has a palindrome permutation if myCharSet contains 1 or 0 characters without a pair
  return myCharSet.size <= 1;
}

hasPalindromePerm('foof');
