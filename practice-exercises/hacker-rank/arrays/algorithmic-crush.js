// You are given a list of size , initialized with zeroes. You have to perform  operations on the list and output the maximum of final values of all the  elements in the list. For every operation, you are given three integers ,  and  and you have to add value  to all the elements ranging from index  to (both inclusive).
//
// Input Format
//
// First line will contain two integers  and  separated by a single space.
// Next  lines will contain three integers ,  and  separated by a single space.
// Numbers in list are numbered from  to .
//
// Constraints
// Output Format
//
// A single line containing maximum value in the updated list.
//
// Sample Input
//
// 5 3
// 1 2 100
// 2 5 100
// 3 4 100
// Sample Output
//
// 200
// Explanation
//
// After first update list will be 100 100 0 0 0.
// After second update list will be 100 200 100 100 100.
// After third update list will be 100 200 200 200 100.
// So the required answer will be 200.

String.prototype.splitSpacesAsInts = function() {
    return this.split(" ").map(function(aNum) { return parseInt(aNum); });
};

function processData(input) {
    var lines = input.split("\n");
    var first = lines[0].splitSpacesAsInts();
    var n = first[0];
    var m = first[1];
    var ops = lines.slice(1).map(function(line) { return line.splitSpacesAsInts(); });
    var max = crush(n, m, ops);
    console.log(max);
}

function crush(n, m, ops) {
    var list = [], op, max, i, j;

    for(i=0; i<n; i++) {
        list.push(0);
    }

    for(i=0; i<m; i++) {
        op = ops[i];
        for(j=op[0]-1; j < op[1]; j++) {
            list[j] = list[j] + op[2];
        }
    }

    max = list[0];
    for(i=1; i<n; i++) {
        if(list[i] > max) {
            max = list[i];
        }
    }

    return max;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
