//Queues are First item in, first item out

'use strict';

function Queue(capacity){
  this._storage = {};
  this._capacity = capacity || Infinity;
  this._head = 0;
  this._tail = 0;

}

Queue.prototype.storage = function() {

}
