'use strict';

const TreeNode = module.exports = function(val) {
  this.value = val;
  this.children = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

//O(n)
Tree.prototype.add = function(val, parentVal) {
  let newNode = new TreeNode(val);

  if(!this.root && !parentVal) {
    this.root = newNode;
    return;
  }

  this.preOrder(node => {
    if(node.value === parentVal) {
      node.children.push(newNode);
      return;
    }
  });
};

//O(n)
Tree.prototype.preOrder = function(callback) {
  _walk(this.root);

  function _walk(node) {
    node.children.forEach(_walk);
    callback(node);
  }
};

//O(n)
Tree.prototype.prune = function(val) {
  if(!val) return new Error('enter a value');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.value === val) {
        index = idx;
        parent = current;
        parent.children.splice(index, 1);
        return;
      }
      console.log('current', current);
      current = node;
    });
  });
};

//O(n)
TreeNode.prototype.appendChild = function(node) {
  if (!(node instanceof TreeNode)) {
    throw new Error('node must be of type TreeNode');
  }
  this.children.push(node);
};

//O(n) Breadth first ttraversal
TreeNode.prototype.prettyPrint = function() {
  let result = '';

  let queue = [this];

  let breadthFirstTraversal = () = => {
    let next = queue.pop();
    if(!next) return;
    result += next.value + ' ';
    next.children.forEach(child => queue.unshift(child)); //unshift adds to beginning
    breadthFirstTraversal();
  };
  breadthFirstTraversal();
  console.log('result', result);
  return result;
};
