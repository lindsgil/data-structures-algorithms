'use strict';

//N-ary tree (any number of children per parent node)
function Tree(value) {
  this.value = value;
  this.children = [];
}

//Adds child to tree or subtree bound to this keyword
// O(1)
Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
};

let tree = new Tree(1);
let branch1 = tree.addChild(2);
let branch2 = tree.addChild(3);
let branch3 = tree.addChild(4);
