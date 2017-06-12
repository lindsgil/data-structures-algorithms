'use strict';

//Implementation
const Stack = module.exports = function(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
};

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
  return this._storage[this._count-1];
}

//O(1)
Stack.prototype.count = function() {
  return this._count;
}
