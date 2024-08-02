class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
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

function mergeLists(list1, list2) {
    const dummyNode = new Node(-1); // Dummy node to help with merging
    let current = dummyNode; // Pointer to build the merged list

    let temp1 = list1.head; // Pointer for the first list
    let temp2 = list2.head; // Pointer for the second list

    // Merge the two lists while both have nodes
    while (temp1 !== null && temp2 !== null) {
        if (temp1.value <= temp2.value) {
            current.next = temp1; // Attach node from list1
            temp1 = temp1.next;  // Move to the next node in list1
        } else {
            current.next = temp2; // Attach node from list2
            temp2 = temp2.next;  // Move to the next node in list2
        }
        current = current.next; // Move the current pointer to the end of the merged list
    }

    // If there are remaining nodes in list1, attach them
    if (temp1 !== null) {
        current.next = temp1;
    }

    // If there are remaining nodes in list2, attach them
    if (temp2 !== null) {
        current.next = temp2;
    }

    // Return the merged list, skipping the dummy node
    return new LinkedList(dummyNode.next);
}

// Example usage
const node1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(5);
node1.next = node2;
node2.next = node3;
const list1 = new LinkedList(node1);

const node4 = new Node(2);
const node5 = new Node(4);
const node6 = new Node(6);
node4.next = node5;
node5.next = node6;
const list2 = new LinkedList(node4);

// Merge the lists
const mergedList = mergeLists(list1, list2);

// Print the merged list
mergedList.printList(); // Expected output: 1, 2, 3, 4, 5, 6
