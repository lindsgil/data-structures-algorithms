'use strict';

//Implement a min stacks

let Stack = function() {
  this.storage = '';
};

function MinStack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
};

//O(1)
MinStack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity alrady reached. remove element before adding new one';
};

//example min Stack
myStack.push(6)
- storage [6]
- min [6]
myStack.push(9)
- storage [6, 9]
- min [6, 6]
myStack.push(23)
- storage [6, 9, 23]
- min [6, 6, 6]
myStack.push(5)
- storage [6, 9, 23, 5]
- min [6, 6, 6, 5]

// minstack pop

Minstack.prototype.pop = function() {
  this._min.pop();
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

//O(1)
Minstack.prototype.peek = function() {
  return this._storage[this._count-1];
};

//O(1)
Minstack.prototype.count = function() {
  return this._count;
};

//O(1)
Minstack.prototype.min = function() {
  return this._min.peek();
};
