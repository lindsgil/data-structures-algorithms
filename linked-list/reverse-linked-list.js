function LinkedList() {
  this.head = null;
}

LinkedList.prototype.reverseLinkedList = function() {
  //empty or single LinkedList
  if(!this.head || !this.head.next) {
    console.log('empty or single element linked list');
    return;
  }
  var p1 = null;
  var p2 = this.head;
  var p3;

  while(p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  this.head = p1;
};
