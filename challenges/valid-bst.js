/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  const orderCheck = [];
  tree.inOrder(val => orderCheck.push(val));
  let check = 0;
  return orderCheck.every((el) => {
    if (el > check) {
      check = el;
      return true;
    }
    return false;
  });
}

BinaryTree.prototype.inOrder = function inOrder(callback) {
  if (this.left) this.left.inOrder(callback);
  callback(this.value);
  if (this.right) this.right.inOrder(callback);
};

module.exports = { BinaryTree, validBST };
