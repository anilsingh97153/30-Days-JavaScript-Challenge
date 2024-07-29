// Implement a Queue class with methods enqueue, dequeue, front

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return `Queue is empty.`;
    }
    return this.items.shift();
  }

  // Get the element at the front of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return `Queue is empty.`; // Return null if the queue is empty
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Use the Queue class to simulate a simple printer queue where print jobs are to the queue and processes in order.

// Create a Queue instance for the printer queue
const printerQueue = new Queue();

// Add print jobs to the queue
printerQueue.enqueue("Print Job 1");
printerQueue.enqueue("Print Job 2");
printerQueue.enqueue("Print Job 3");
console.log(printerQueue);

while (!printerQueue.isEmpty()) {
  console.log(`Processing: ${printerQueue.dequeue()}`);
}

console.log(printerQueue);
