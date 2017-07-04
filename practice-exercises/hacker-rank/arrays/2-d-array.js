//Given a 2 dimensional array, find the largest hourglass sum of the Array
//Sample Input: A
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

//A Contains the following hourglass Arrays
// 1 1 1   1 1 0   1 0 0   0 0 0
//   1       0       0       0
// 1 1 1   1 1 0   1 0 0   0 0 0
//
// 0 1 0   1 0 0   0 0 0   0 0 0
//   1       1       0       0
// 0 0 2   0 2 4   2 4 4   4 4 0
//
// 1 1 1   1 1 0   1 0 0   0 0 0
//   0       2       4       4
// 0 0 0   0 0 2   0 2 0   2 0 0
//
// 0 0 2   0 2 4   2 4 4   4 4 0
//   0       0       2       0
// 0 0 1   0 1 2   1 2 4   2 4 0

function main() {
  var arr = [];
  var hourGlassSum = -63; //values in array are given to be between -9 and 9, lowest possible sum is 6 * -9 = -63
  for(arr_i = 0; arr_i < 6; arr_i++){
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }
  for(var i = 0; i < 4; i ++) {
    for(var j = 0; j < 4; j++) {
      var t;
      t = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      if(t > hourGlassSum) {
        hourGlassSum = t;
      }
    }
  }
  console.log(hourGlassSum);
}
