// Merge K sorted lists.
// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Min-Heap implementation using an array
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(node) {
      this.heap.push(node);
      this.bubbleUp();
    }
  
    extractMin() {
      if (this.heap.length === 0) return null;
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.bubbleDown();
      }
      return min;
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element.val >= parent.val) break;
        this.heap[index] = parent;
        index = parentIndex;
      }
      this.heap[index] = element;
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let swap = null;
        if (leftChildIndex < length) {
          const leftChild = this.heap[leftChildIndex];
          if (leftChild.val < element.val) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          const rightChild = this.heap[rightChildIndex];
          if ((swap === null && rightChild.val < element.val) || (swap !== null && rightChild.val < this.heap[swap].val)) {
            swap = rightChildIndex;
          }
        }
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }
  
  function mergeKLists(lists) {
    const minHeap = new MinHeap();
  
    for (const list of lists) {
      if (list) minHeap.insert(list);
    }
  
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (minHeap.heap.length > 0) {
      const node = minHeap.extractMin();
      current.next = node;
      current = current.next;
      if (node.next) minHeap.insert(node.next);
    }
  
    return dummy.next;
  }
  
  // Example usage:
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const list3 = new ListNode(2, new ListNode(6));
  
  const lists = [list1, list2, list3];
  
  const mergedHead = mergeKLists(lists);
  
  // Function to print the linked list
  function printList(node) {
    let result = '';
    while (node) {
      result += node.val + ' -> ';
      node = node.next;
    }
    console.log(result.slice(0, -4)); // Remove trailing arrow
  }
  
  printList(mergedHead); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
  