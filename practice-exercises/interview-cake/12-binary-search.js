// Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?

//using binary search since array is sorted allows us to look for n
//using O(log n ) time and O(1) additional space

function binarySearch(target, nums) {
  //see if target appears in nums

  //we think of floorIndex and ceilingIndex as 'walls' around
  //the possible positions of our target, so by -1 meaning to the left of the 0th index
  var floorIndex = -1;
  var ceilingIndex = nums.length;

  //if there isn't at least one index between floor and ceiling we have run out of guesses and the number must not be present
  while(floorIndex + 1 < ceilingIndex) {

    //find the index halfway between floorIndex and ceilingIndex
    //round down to avoid getting half index
    var distance = ceilingIndex - floorIndex;
    var halfDistance = Math.floor(distance / 2);
    var guessIndex = floorIndex + halfDistance;

    var guessValue = nums[guessIndex];

    if(guessValue === target) {
      return true;
    }

    if (guessValue > target) {
      //target is to the left so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      //target is to the right so move floor to the right
      floorIndex = guessIndex;
    }
  }
  return false;
}
