'use strict';

const bstNode = module.exports = function(val) {
  this.val = val; //unique id of the node
  this.data = null;
  this.left = null;
  this.right = null;
  this.parent = null;
}

bstNode.prototype.insert = function(val) {
  if(!this) return
  if(val === this.val) throw new Error('val must be unique')
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val)
      this.right.parent = this
    } else this.right.insert(val)
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val)
      this.left.parent = this
    } else this.left.insert(val)
  }
}

bstNode.prototype.delete = function() {


}

bstNode.prototype.breadthFirst = function() {
  let q = [this]
  let result = ''
  let current
}

bstNode.prototype.contains = function() {

}

bstNode.prototype.lookup = function(val) {
  if(val < this.val) this.left ? this.left.lookup(val) : null;
  if(val > this.val) this.right ? this.right.lookup(val) : null;
  return this;
}

if(found) {
  //figure out how many children
  childCount = (current.left !== null ? 1 : 0) +
  (curent.right !== null ? 1 : 0);

  //special case: the value is at the root
  if (current === this._root) {
    switch(childCount) {
      //other cases removed to save space

      //two children, little work to do
      case 2:
        //new root will be the old root's left child
        //...maybe
        replacement = this._root.left;

        //find the right-most leaf node to be
        //the real new root
        while(replacement.right !== null) {
          replacementParent = replacement;
          replacement = replacement.right;
        }

        //its not the first node on the left
        if(replacementParent !== null) {

          //remove the new root from it's
          //root's children
          replacement.right = this._root.right;
          replacement.left = this._root.left;
        } else {
          //just assign the children
          replacement.right = this._root.right;
        }
        //officially assign new root
        this._root = replacement;

      //no default
    }
    //non-root values
  } else {
    switch(childCount) {
      //other cases removed to save space
      //two children, a bit more complicated
      case 2:
        //reset pointers for new ttraversal
        replacement = current.left;
        replacementParent = current;

        //find the right-most node
        while(replacement.right !== null) {
          replacementParent = replacement;
          replacement = replacement.right;
        }

        replacementParent.right = replacement.left;

        //assign children to the replacement
        replacement.right = current.right;
        replacement.left = current.left;

        //place the replacement in the right spot
        if (current.value < parent.value) {
          parent.left = replacement;
        } else {
          parent.right = replacement;
        }

        //no default
    }
  }
}
