'use strict';

const bstNode = module.exports = function(val) {
  this.val = val;
  this.data = null;
  this.left = null;
  this.right = null;
  this.parent = null;
};

//O(log n)
bstNode.prototype.appendChild = function(val) {
  if (!this) return;
  if (val < this.val) {
    if (!this.left) {
      this.left = new bstNode(val);
    } else this.left.appendChild(val);
  }
  if (val > this.right) {
    if (!this.right) {
      this.right = new bstNode(val);
    } else this.right.appendChild(val);
  }
};

//O (log n)
bstNode.prototype.find = function(val) {
  if (val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } if (val > this.val) {
    if (!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

//O (log n)
bstNode.prototype.findMin = function() {
  if(!this) return null;
  if (!this.left) return this;
  else return this.left.findMin();
};

//O (log n )
bstNode.prototype.findMax = function() {
  if (!this) return null;
  if (!this.right) return this;
  else return this.right.findMax();
};

bstNode.prototype.fromArray = function(num) {
  function recurse(num, start, end) {
    if(start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new bstNode(num[mid]);
    root.left = recurse(num, start, mid - 1);
    root.right = recurse(num, mid + 1, end);
    return root;
  }
  return recurse(num, 0, num.length - 1);
};

bstNode.prototype.traverse = function(process) {
  function inOrder(node) {
    if(node) {
      //traverse left subtree
      if(node.left !== null) {
        inOrder(node.left);
      }
      process.call(this, node);

      if(node.right !== null) {
        inOrder(node.right);
      }
    }
  }
  inOrder(this._root);
};

bstNode.prototype.toArray = function() {
  let result = [];
  this.traverse(function(node) {
    result.push(node.value);
  });
  return result;
}
