//to find the second largest element in a binary search tree
//first find the largest

//we are doing one walk down the tree so
//time is O(h) where h is the height of the tree, meaning if the
//tree is balanced it is O(lg n), O(n) if not, and O(1) space
function findLargest(rootNode) {
  var current = rootNode;
  while(current) {
    if(!current.right) {
      return current.value;
    }
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || !rootNode.right && !rootNode.left) {
    throw new Error('tree must contain at least two values');
  }

  var current = rootNode;

  while(current) {
    //case: current is the largest and has a left subtree
    //the second largest value is the largest value in that subtree
    if(current.left && !current.right) {
      return findLargest(current.left);
    }

    //case current is the parent of the largest and the largest has no children
    //this means the current is the second largest
    if(current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }
}
