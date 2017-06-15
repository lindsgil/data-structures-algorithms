'use strict';

const sllNode = module.exports = function(value) {
  this.val = value;
  this.next = null;
};

const SLL = module.exports = function(value) {
  this.head = null;
};

SLL.prototype.prepend = function(value) {
  let node = new sllNode(value);
  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};

//O(n)
SLL.prototype.append = function(value) {
  let node = new sllNode(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head)
  lastNode.next = node;
  return this;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

//O(n)
SLL.prototype.reverse = function() {
  const node = new sllNode();
  let head = this.head;
  let pointer = null;
  const originLast = this.lastNode;
  let current = head;

  while(head != originLast) {
    pointer = current.next;
    pointer = head;
  }
  return node;
};

//O(n)
SLL.prototype.remove = function(value) {
  let current = this.head;
  let length = this._length;
  let count = 0;

  let beforeDeletedNode = null;
  let nodeForDeleting = null;
  let deleteNode = null;

  if(value === 1) {
    this.head = current.next;
    deleteNode = current;
    current = null;
    this._length--;

    return deleteNode;
  }

  while( count < value) {
    beforeDeletedNode = current;
    nodeForDeleting = current.next;
    count ++;
  }

  beforeDeletedNode.next = nodeForDeleting.next;
  deleteNode = nodeForDeleting;
  nodeForDeleting = null;
  this._length--;

  return deleteNode;
};

//O(n)
SLL.prototype.print = function() {
  let output = '[';
  let current = this.head;

  while(current !== null) {
    output += current.val;
    if(current.next !== null) {
      output += ',';
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
  return output;
};
