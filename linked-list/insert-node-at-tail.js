//insert node at tail of a singly linked list
//you know you have reached the tail when this.next = null

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insertNodeAtTail = function(val) {
  var node = {
    data: val,
    next: null
  };

  if(!this.head) {
    this.head = node;
  } else {
    var p1 = this.head;
    while(p1.next) {
      p1 = p1.next;
    }
    p1.next = node;
  }
};
