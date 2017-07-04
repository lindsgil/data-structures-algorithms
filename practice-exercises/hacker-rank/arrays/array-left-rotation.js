process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    //custom variables
    var i;
    var j;
    var temp1;
    var holdeverything;
    //constraints
    if(n < 1 || k < 1 || n > 100000 || k > n)
        {
            return;
        }

      for(i=1; i<n;i++)
        {
                if(a[i] > 1000000)
                {
                return;
                }
        }

    //reassignment of values in the array according to specifications.
        for(j=0; j<k;j++)
        {
                   for(i=0; i<n-1;i++)
                    {
                        temp1 = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp1;

                    }

        }

    //console.log is the only way to printf in javascript, and the function unfortunately automatically includes a new line in every call. This means to have an output of an unknown number of unknown elements, some variable (in this case "holdeverything") is needed to hold all the data so that it can all be print in a single call of console.log
    holdeverything = a[0];
    for(i=1; i<n;i++)
        {
            holdeverything += " " + a[i];

        }


    console.log(holdeverything);

}
