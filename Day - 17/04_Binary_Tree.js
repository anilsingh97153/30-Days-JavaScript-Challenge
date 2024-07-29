class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node into the binary tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // Insert in the left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Insert in the right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inOrderTraversal(root = this.root, result = []) {
    if (root === null) return result;

    // Traverse the left subtree
    this.inOrderTraversal(root.left, result);

    // Visit the node
    result.push(root.value);

    // Traverse the right subtree
    this.inOrderTraversal(root.right, result);

    return result;
  }
}

const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-Order Traversal:", tree.inOrderTraversal());
// Output: In-Order Traversal: [2, 3, 4, 5, 6, 7, 8]
