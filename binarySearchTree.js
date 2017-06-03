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

bstNode.prototype.delete = function(val) {


}
