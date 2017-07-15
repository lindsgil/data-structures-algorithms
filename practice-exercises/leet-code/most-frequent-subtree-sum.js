var findFrequentTreeSum = function(root) {
    const counts = {};
    const max = { val: -Infinity };
    dfs(root, counts, max);
    const sums = [];
    for (let key in counts) {
        if (counts[key] === max.val) sums.push(parseInt(key));
    }
    return sums;
};

function dfs(root, counts, max) {
    if (!root) return 0;
    let sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max);
    counts[sum] = (counts[sum] || 0) + 1;
    max.val = Math.max(max.val, counts[sum]);
    return sum;
}
