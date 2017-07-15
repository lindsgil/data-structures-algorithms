//Array.prototype.reduce()
//applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

//ex
var total = [0,1,2,3].reduce(function(sum,value) {
  return sum + value; }, 0);
//will return 6

//ex
var flattend = [[0,1],[2,3],[4,5]].reduce(function(a,b){
  return a.concat(b);}, []);
//flattend is [0,1,2,3,4,5]

//syntax: arr.reduce(callback[ , initialValue])
//ex
var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
[ { x:22 }, { x:42 }].reduce(maxCallback);
//returns 42

//ex using an arrow function
[0,1,2,3,4].reduce((prev, curr) => prev + curr);

//ex counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function(allNames,name){
  if(name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
//countedNames is : { 'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1 }

//ex bonding arrays contained in an array of objects using the spread operator and initialValue
//friends - an array of objects
//where object field 'books' - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
},{
  name: 'Bob',
  books: ['War and Peace', 'Romeo and Juliet'],
  age: 26
},{
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
//allbooks - list which will contain all friends books plus additional list contained in initialValue
var allbooks = friends.reduce(function(prev,curr) {
  return[...prev, ...curr.books];
}, ['Alphabet']);
//allbooks = ['Alphabet', 'Bible', 'Harry Potter', 'War and Peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']

//polyfill per MDN
if(!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce ' + 'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback + 'is not a function');
      }
      //1. let 0 be ? ToObject(this value).
      var o = Object(this);

      //2 Let len be ? ToLength(? Get(0, 'length')).
      var len = o.length >>> 0;

      //steps 3,4,5,6,7
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }
        //3. if len is 0 and initialValue is not present, throw a TypeError exception
        if (k >= len) {
          throw new TypeError('Reduce of empty array' + 'with no initial value');
        }
        value = o[k++];
      }
      //8. Repeat while k < len
      while (k < len) {
        //a. let pk be ! ToString(k).
        //b let kPresent be ? HasProperty(0, Pk).
        //c if kPresent is true, then
        //  i. Let kValue be ? Get(0, Pk).
        //  ii. Let accumulator be ? Call(callbackfn, undefined, <<accumulator, kValue, k, 0 >>).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }
        //d Increase k by 1
        k++;
      }
      //9 return accumulator
      return value;
    }
  });
}
