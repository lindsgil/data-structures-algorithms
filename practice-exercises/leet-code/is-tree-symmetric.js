//check if tree is symmetric

var isSymmetric = function(root) {
    if (!root) { return true; }

    var queue = [];
    queue.push(root);

    while (queue.length > 0) {
        var size = queue.length;
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (queue.length > 0 && queue.length % 2 !== 0) { return false; }
        if (queue.length > 0 && queue.length % 2 === 0) {
            var left = 0, right = queue.length - 1;
            while (left < right) {
                if (
                    (queue[left] === null && queue[right] !== null) ||
                    (queue[left] !== null && queue[right] === null) ||
                    (queue[left] && queue[right] && queue[left].val !== queue[right].val)
                ) {
                    return false;
                }
                left++;
                right--;
            }
        }
    }

    return true;
};
