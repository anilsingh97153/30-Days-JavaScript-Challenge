// Implement a Node class to represent an element in a linked list with properties value and next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


// Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {

  constructor(head) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeLast() {
    if (this.head === null) {
      console.log("Linkedlist is empty.");
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  printList() {
    if (this.head === null) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}


const list = new LinkedList(node1);
list.append(5);
list.append(6);
list.append(7);

console.log("List after adding nodes:");
list.printList(); // Output: 1 2 3 4 5 6 7 

list.removeLast();
list.removeLast();
console.log("List after removing last two nodes:");
list.printList(); // Output: 1 2 3 4 5 