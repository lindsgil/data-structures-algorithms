'use strict';

//stacks are first item in last item out

let Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function() {
  this.storage = this.storage.concat('***',val);

}

Stack.prototype.pop = function() {
  //slice off last character up until last asterisk
  var str = this.storage.slice(this.storage.lastIndexOf('***')+3);
  //update the new stack without the last item
  this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
  //return the last item
  return str;
}

Stack.prototype.size = function() {

}

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
  return this._storage[this._count-1];
}

//O(1)
Stack.prototype.count = function() {
  return this._count;
}
