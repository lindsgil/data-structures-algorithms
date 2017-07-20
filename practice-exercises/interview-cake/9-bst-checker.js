// Write a function to check that a binary tree ↴ is a valid binary search tree

//sample binary tree class
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

//depth first walk through the tree checking that it's greater than all ancestral nodes in the right subtree and less than all ancestral nodes in the left subtree

//O(n) Time and Space
function isBinarySearchTree(treeRoot) {
  //start at the root with an arbitrarily high upperbound and low lowerbound
  var nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

  //depth first traversal
  while(nodeAndBoundsStack.length) {
    var nodeAndBounds = nodeAndBoundsStack.pop();
    var node = nodeAndBounds.node,
      lowerBound = nodeAndBounds.lowerBound,
      upperBound = nodeAndBounds.upperBound;

    //if this node is invalid return false right away
    if(node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }
    if (node.left) {
      //this node must be less than the current node
      nodeAndBounds.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
    }
    if (node.right) {
      //this node must be greater than the current node
      nodeAndBounds.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }

  //if none of the nodes were invalid, return true
  return true;
}

//recursive solution: O(n) Time and space
function isBinarySearchTree(treeRoot, upperBound, lowerBound) {

  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Infinity;

  if(!treeRoot) return true;

  if(treeRoot.value <= lowerBound || treeRoot.value >= upperBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
};
