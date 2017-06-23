'use strict';

function Hashtable(tableSize) {
  this._size = tableSize;
  this._storage = [];
  this._count = 0;
}

let myHash = new HashTable(5);
console.log(myHash)
// would show: {_size: 5, _storage: [], _count: 0}

HashTable.prototype.find = function(key) {
  let hash = simpleHash(key, this._size);
  this._storage[hash] = this._storage[hash] || [];
  let bucket = this._storage[hash];
  //iterate through bucket and check if key is present
  let match;
  let matchIndex;
  bucket.forEach(function(item, index) {
    if (item.hasOwnProperty(key)) {
      match = item;
      matchIndex = index;
    }
  });
  return {
    match: match,

  }
}

HashTable.prototype.set = function(key, value) {
  let match = this.find(key).match;
  let bucket = this.find(key).bucket;
  //if match exists, update value
  if (match) {
    match[key] = value;
  }
  //if not, add new object with key/value pair
  else {
    let newItem = {};
    newItem[key] = value;
    this._count++;
    bucket.push(newItem);
    if (this._count > 0.75*this._size) {
      this.resize(2*this._size);
    }
  }
  return this;
};

HashTable.prototype.get = function(key) {
  let match = this.find(key).match;
  //if key is found, match is an object {key: value}
  // if not, match is undefined
  return match && match[key];
};

const HashTable = module.exports = function(size=8192) {
  this.size = size
  this.buckets = [ ...Array(this.size)]
}

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required for hash to function... derp')
  let hash = key.split('').reduce
}

myObj = {};

myObj.thingamajig = true;
myObj.hellooo = 'hola';

{thingamajig: true, hellooo: 'hola'}

myHash('thingamajig') => 3
myHash('hello') => 1

memory [____, 'hola', ____, true, ____]

myObj.thingamajig; //true
myObj.hellooo; //'hola'

myHashTable.set('thingamajig', true);
myHashTable.get('thingamajig'); //true
