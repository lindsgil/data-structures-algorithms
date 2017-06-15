'use strict';

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value < this.value) {
    //if this .left doesn't exist return false
    //if it does exist, check if its subtree contains the value
    return !!this.left && this.left.contains(value);
  }
  if (value > this.value) {
    //if this.right doesn't exist return false
    //if it does exist, check if its subtree contains teh value
    return !!this.right && this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  }
  else {
    if (this.right) this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  }
  return this;
};

//for binary search tree, this visits the nodes in asc orderedArr
//O (n)
BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  if (!this.left && !this.right) return fn(this);
  if (this.left) this.left.traverseDepthFirst_inOrder(fn);
  fn(this);
  if (this.right) this.right.traverseDepthFirst_inOrder(fn);
};

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  fn(this);
  if (this.left) this.left.traverseDepthFirst_preOrder(fn);
  if (this.right) this.right.traverseDepthFirst_preOrder(fn);
};

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  if (this.left) this.left.traverseDepthFirst_postOrder(fn);
  if (this.right) this.right.traverseDepthFirst_postOrder(fn);
  fn(this);
};

//Binary tree deleting nodeMin()
BinarySearchTree.prototype.deleteMin = function(parent) {
  if(!this.left && !this.right) {
    if(parent) {
      parent.left = null;
    } else {
      this.value = null;
    }
  } else if (!this.left && this.right) {
    if(parent) {
      parent.left = this.right;
    } else {
      this.value = this.right.value;
      this.right = this.right.right;
    }
  }
  if(this.left) this.left.deleteMin(this);
};

//Binary Search Tree deleting nodeMax()
BinarySearchTree.prototype.deleteMax = function(parent) {
  if(!this.right && !this.left) {
    if(parent) {
      parent.right = null;
    } else {
      this.value = null; //we want to addNode
    }
    else if (!this.right && this.left) {
      if(parent) {
        parent.right = this.left;
      } else {
        this.value = this.left.value;
        this.left = this.left.left;
      }
    }
    if(this.right) this.right.deleteMax(this);
  }
}
