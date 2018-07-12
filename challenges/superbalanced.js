/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */


function getHeight(tree) {
  return tree ? 1 + Math.max(getHeight(tree.left), getHeight(tree.right)) : 0;
}

function superbalanced(tree) {
  if (!tree) return true;
  return (
    Math.abs(getHeight(tree.left) - getHeight(tree.right)) <= 1
    && superbalanced(tree.left)
    && superbalanced(tree.right)
  );
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
