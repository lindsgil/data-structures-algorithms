function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error('impossible to find less than first to last node')
  }
  //to get the length of the list
  var listLength = 1;
  //start at the head
  var currentNode = head;
  while(currentNode.next) {
    //traverse the whole list and count the nodes
    currentNode = currentNode.next;
    listLength += 1;
  }
  //if k is greater than the length of the list it will be impossible to find that value so throw an Error
  if (k > listLength) {
    throw new Error('k is larger than the length of the list');
  }
  //step 2 get to the target node
  //calculate how far to go from the head
  var howFarToGo = listLength - k;

  currentNode = head;
  for (var i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

//time cost is linear 2 * O(n) because we are traversing the list O(n) twice
//Space cost is constant because we are only keeping track of the current node

//approaching using a 'stick method' with two pointers
function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error('impoossible to find less than 1 k value');
  }

  var leftNode  = head;
  var rightNode = head;

  // move rightNode to the kth node
  for (var i = 0; i < k - 1; i++) {
    //but along the way if a rightNode doesn't exist then that means k is greater than the length of the list so we need to throw an Error
    if (!rightNode.next) {
      throw new Error('k is larger than the length of the list');
    }

    rightNode = rightNode.next;
  }

  // starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode;
}
