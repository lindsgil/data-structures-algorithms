'use strict';

function Node(value) {
  this.next = null;
  this.value = value;
};

function LinkedList(headValue) {
  if (headValue === undefined) console.log('must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
};

//a foreach loops increments and compares
//then calls a cb on an item in the array

LinkedList.prototype.forEach = function(callback) {
  let node = this.head;
  while (node) {
    callback(node.value);
    node = node.next;
  }
};

LinkedList.prototype.print = function() {
  let result = [];
  this.forEach(function(value) {
    result.push(value);
  });
  return result.join(', ')
};

//O(1) constant time complexity
LinkedList.prototype.insertAfter = function(node, value) {
  //get reference to former next
  let oldNext = node.next;
  //create new node
  let newNext = new Node(value);
  //store it as teh new next
  node.next = newNext;
  //set next for the new node to be the old next
  newNext.next = oldNext;
  //if reference node is tail, set tail to newNext
  if (this.tail === node) this.tail = newNext;
  return newNext;
};
