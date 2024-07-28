// Recursive function to perform an in-order traversal of a binary tree.

// node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to perform in-order traversal.
function inOrderTraversal(node, result = []) {
  if (node === null) return result;

  // Traverse the left subtree.
  inOrderTraversal(node.left, result);

  // Visit the root node.
  result.push(node.value);

  // Traverse the right subtree
  inOrderTraversal(node.right, result);

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = inOrderTraversal(root);
console.log("In-order Traversal:", result); // [ 4 2 5 1 6 3]

// Recusrive function to calculate the depth of a binary tree.

function calculateDepth(node, depth = 0) {
  // Base case: if the node is null, the depth is 0
  if (node === null) return 0;

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

console.log("Depth of the tree:", calculateDepth(root)); // Output: 3
