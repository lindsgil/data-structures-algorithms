//delete node from a LinkedList

function LinkedList () {
  this.head = null;
}

LinkedList.prototype.deleteNode = function(val) {
  //if linked list is empty
  if(!this.head) {
    console.log('empty list');
    return;
  }
  //if you are deleting the head
  if(this.head.data === val) {
    this.head = this.head.next;
  } else {
    var p1 = this.head;
    var p2 = p1.next;
    while(p2) {
      if(p2.data === val) {
        p1.next = p2.next;
        break;
      } else {
        p1 = p2;
      }
      p2 = p2.next;
    }
  }
};
