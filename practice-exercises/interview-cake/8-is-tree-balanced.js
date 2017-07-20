//binary tree is where every node has 2 or fewer children

function BinaryTreeNode(value){
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

//performing a depth first search on the tree to see if the depths between two nodes is less than 2
//O(n) time and space

function isBalanced(treeRoot) {

  //a tree with no leaves is super balanced, since there are no leaves!
  if(!treeRoot) {
    return true;
  }

  var depths = []; //we short circuit as soon as we find more than two

  //nodes will store pairs of nodes and the nodes depth
  var nodes = [];
  nodes.push([treeRoot, 0]);

  while(nodes.length) {

    //pop a node and its depth from the top of our stack
    var nodePair = nodes.pop();
    var node = nodePair[0],
      depth = nodePair[1];

      //case we found a leaf
    if (!node.left && !node.right) {

        //we only care if its a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        //two ways we might have an unbalanced tree
        //1. more than 2 different leaf depths
        //2. 2 leaf depths that are more than 1 apart
        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
      //case: this isnt a leaf, keep stepping down
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}
