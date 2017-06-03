//write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

let recursiveReverse = function(arr) {
  let reversedArr = [];
  let addItems = function(orderedArr) {
    //if array is empty, return
    if(orderedArr.length > 0){
      reversedArr.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  }
  addItems(arr);
  return reversedArr;
};

//write a function 'recursiveMultiplier' that takes two arguments, 'arr' and 'num' and multiplies each arr value by num and returns an array of values

let recursiveMultiplier = function(arr, num) {
  if(arr.length === 0){
    return arr;
  }
  let last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last*num);
  return arr;
}
