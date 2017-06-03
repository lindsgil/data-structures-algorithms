'use strict';

const TreeNode = module.exports = function(value, children) {
  this.value = value;
  this.children = [];
};

TreeNode.prototype.appendChild = function(node) {
  if(!(node instanceof TreeNode))
    throw new Error('node must be type TreeNode');
  this.children.push(node);
}

TreeNode.prototype.prettyPrint = function() {
  let result = '';

  let queue = [];

  let breadthFirstTraversal = () => {
    let next = queue.pop()
    result += next.value + ' '
    next.children.forEach(child => queue.unshift(child))
    breadthFirstTraversal()
  }
  breadthFirstTraversal();
}

treeRoot = new TreeNode(3)

treeRoot

treeRoot.appendChild(new TreeNode(40))

treeRoot.children[0].appendChild(new TreeNode(7))

treeRoot.children.forEach(child => {
  child.appendChild(new TreeNode(Math.random()))
  child.appendChild(new TreeNode(Math.random()))
  child.appendChild(new TreeNode(Math.random()))
})

treeRoot.prettyPrint();

treeRoot
