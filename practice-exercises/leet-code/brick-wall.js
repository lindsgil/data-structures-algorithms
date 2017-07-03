// There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.
// The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.
// If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.
// You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

var leastBricks = function(wall) {
    const counts = {};
    let max = 0;
    for (let row of wall) {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            counts[sum] = (counts[sum] || 0) + 1;
            max = Math.max(max, counts[sum]);
        }
    }
    return wall.length - max;
};
