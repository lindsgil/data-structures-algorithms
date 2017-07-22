// You want to be able to access the largest element in a stack.

//given this stack class
function Stack(){
  this.items = [];
}
//push a new item to the array
Stack.prototype.push = function(item) {
  this.items.push(item);
};

//remove last item
Stack.prototype.pop = function() {
  //if the stack is empty return null
  if (!this.items.length) {
    return null;
  }
  return this.items.pop();
};

//see what the last item is
Stack.prototype.peek = function() {
  if(!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
};

//solution: time complexity O(1) for push pop and getMax. O(m) additional space where m is the number of operations

function MaxStack() {
  this.stack = new Stack();
  this.maxesStack = new Stack();
};
//Add a new item to the top of our stack, if the item is greater than or equal to the last item in maxesStack then it is our new max! so we add it to maxesStack
MaxStack.prototype.push = function(item) {
  this.stack.push(item);
  if(!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
    this.maxesStack.push(item);
  }
};
//Remove and return the top item from our stack. If it equals the top item in maxesStack, they must have been pushed in together. so we will pop it out of maxesStack too
MaxStack.prototype.pop = function() {
  var item = this.stack.pop();
  if (item === this.maxesStack.peek()) {
    this.maxesStack.pop();
  }
  return item;
};

//the last item in maxesStack is the max item in our stack
MaxStack.prototype.getMax = function() {
  return this.maxesStack.peek();
};
