// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  let emptArr = [];
  let split = string.split(' ');
  for(let i = 0; i < split.length; i++) {
    let indexSplit = split[i].split('');
    if(split[i].length < 5) {emptArr.push(indexSplit.join(''));}
    if(indexSplit.length >= 5) {
      indexSplit = indexSplit.reverse();
      indexSplit = indexSplit.join('');
      emptArr.push(indexSplit);
    }
  }
  return emptArr.join(' ');
}

// test cases
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
