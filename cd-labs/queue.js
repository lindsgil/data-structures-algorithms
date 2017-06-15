//Queues are First item in, first item out

//the underscore syntax for parameters indicates they are part of the model, tells future engineers not to change these specific parameters

'use strict';

function Queue(capacity){
  this._storage = {};
  this._capacity = capacity || Infinity;
  this._head = 0;
  this._tail = 0;
}

//O(1)
Queue.prototype.enqueue = function(value) {
  if(this._count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this._count();
  }
  return 'max capacity already reached, remove element before adding a new one';
};

//O(1)
Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if(this._head < this._tail) this._head++;
  return element;
};

//O(1)
Queue.prototype.peek = function() {
  return this._storage[this._head];
};

//O(n)
Queue.prototype.contains = function(value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }
}
