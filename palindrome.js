//write a function to check and see if a string is a palindrome


func isPalindrome(str) {

  //first step is to remove unwanted characters from the string using regular
  //expression or REGEX

  let regexStr = /[^A-Za-z0-9]/g;

  let lowerCaseRegexStr = str.toLowerCase().replace(regexStr, '');

  //split reverse and join to check the reverse of the lower case string above

  let reverseStr = lowerCaseRegexStr.split('').reverse().join('');

	if(reverseStr === lowerCaseRegexStr) {
      return true;
	} else {
		  return false;
	}
};
