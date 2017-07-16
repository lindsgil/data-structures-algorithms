//string.prototype.indexOf
//method returns the index within the calling string object of the first occurence of teh specified value. returns -1 if the value is not found

//str.indexOf(searchValue [, fromIndex])
//searchValue is a string representing the value to search for
//fromIndex is the index the search starts at from left to right (optional, default is 0)

//.lastIndexOf(searchValue) searches string and returns the last index of value represented by searchValue

//case sensitivity applies

//ex
'Blue whale'.indexOf('Blue'); //returns 0
'Blue whale'.indexOf('Bluet'); //returns -1
'Blue whale'.indexOf('whale'); //returns 5
'Blue whale'.indexOf('whale', 7); //returns -1
'Blue whale'.indexOf('whale', 5); //returns 5

//ex using indexOf to count occurrences of a letter in a string
var str = 'To be, or not to be, that is the question';
var count = 0;
var pos = str.indexOf('e');
while(pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}
console.log(count); //displays 4
