//write a function that takes an array of unsorted scores and the maximum possible score and returns an array of sorted player scores

//first solution using the sort method in JavaScript
function sortScore(unsortedArray, n) {
  //brute force approach is to iterate through the array with a pivot variable and compare indices
  //base case is if a score in the array is above the maximum highest score
  unsortedArray.sort(function(a,b) {
    return a - b;
  });
  console.log(unsortedArray);
}

sortScore([34,2,78,15,90, 90, 15], 100);

//second solution using count sort method
//count sort takes O(n) time and O(n) space

function sortScore(unsortedArray, n) {
  //create one empty array to store the amount of times each score occurs
  var scoreCount = [];
  //populate scoreCount with 0s to start at each index
  for(var i = 0; i < n + 1; i++) {
    scoreCount[i] = 0;
  }

  //populate scoreCount to keep track of amount of times each score occcurs
  unsortedArray.forEach(function(num) {
    scoreCount[num] += 1;
  });

  //declare sorted Array variable
  var sortedArray = [];
  var currentSortedIndex = 0;

  for(var num = 0; num < scoreCount.length; num++) {
    var count = scoreCount[num];
    //for the number of times an item occurs
    for (var j = 0; j < count; j++) {
      //add to sorted Array
      sortedArray[currentSortedIndex] = num;
      console.log(sortedArray);
      currentSortedIndex++;
    }
  }
  return sortedArray;
}

//third solution with O(n) time complexity and O(n) space complexity
function sortScore(unsortedArray, n) {
  //empty array to hold score count
  var scoreCount = [];
  //populate scoreCount with 0s to start
  for (var i = 0; i < n + 1; i++) {
    scoreCount.push(0);
  }
  //add unsortedArray scores to scoreCount
  unsortedArray.forEach(function(score){
    scoreCount[score]++;
  });
  //declare array for sorted scores
  var sortedScores = [];
  //for each item in score Counts
  for(var score = n; score >= 0; score--) {

    var count = scoreCount[score];

    //for the number of times the item occurs
    for (var time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }
  return sortedScores;
}
