'use strict';

//stack prototypes
//Implementation

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

//O(1)
Stack.prototype.push = function(value) {
  if(this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'max capacity already reached. remove element before adding a new one';
}

//O(1)
Stack.prototype.pop = function() {
  //if decrement is at the beginning it decrements first before returning the number
  //if decrement is after the value it will return the value and THEN decrement
  var value = this.storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0){
    this._count = 0;
  }
  return value;
};

//O(1)
Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
};

//O(1)
Stack.prototype.count = function() {
  return this._count;
};

//Queeue with two stack solution
function Queue_TwoStack() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
};

Queue_TwoStack.prototype.enqueue = function(value) {
  this._stackIn.push(value);
};

Queue_TwoStack.prototype._transferStacks = function() {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStack.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();
};

Queue_TwoStack.prototype.count = function() {
  return this._stackOut.count() + this._stackIn.count();
};
