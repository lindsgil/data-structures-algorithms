//given two arrays check and see if they're the same tree

//definition for binary tree node
function treeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSameTree = function(p, q) {
  //if boths nodes are null return true
  if(!p && !q) return true;
  if((!p && q) || (p && !q) || (p.val !== q.val)) return false;
  return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
};
