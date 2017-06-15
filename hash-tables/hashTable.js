'use strict';

const HashTable = module.exports = function(size=8192) {
  this.size = size
  this.buckets = [ ...Array(this.size)]
}

HashTable.prototype.hashKey = function(key) {
  if(!key) throw new Error('key required for hash to function... derp')
  let hash = key.split('').reduce
}
