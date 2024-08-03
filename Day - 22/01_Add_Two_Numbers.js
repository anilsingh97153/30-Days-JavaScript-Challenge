function addTwoNumbers(l1, l2) {
    let carry = 0;
    let ld;
    let ds;
    let number = [];
    while (l1 !== null && l2 !== null) {
      ds = l1.val + l2.val + carry;
      carry = ds > 9 ? 1 : 0;
      ld = ds % 10;
      number.push(ld);
      l1 = l1.next;
      l2 = l2.next;
    }
  
    while (l1 !== null) {
      ds = l1.val + carry;
      carry = ds > 9 ? 1 : 0;
      ld = ds % 10;
      number.push(ld);
      l1 = l1.next;
    }
  
    while (l2 !== null) {
      ds = l2.val + carry;
      carry = ds > 9 ? 1 : 0;
      ld = ds % 10;
      number.push(ld);
      l2 = l2.next;
    }
    if (carry > 0) number.push(carry);
  
    const head = new ListNode(number[0]);
    let temp = head;
    for (let i = 1; i < number.length; i++) {
      let node = new ListNode(number[i]);
      temp.next = node;
      temp = node;
    }
    return head;
}

class ListNode {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.next = null;
  }
}

const node1 = new ListNode(2);
const node2 = new ListNode(9);
const node3 = new ListNode(6);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const node5 = new ListNode(8);
const node6 = new ListNode(7);
const node7 = new ListNode(5);
node5.next = node6;
node6.next = node7;

const sum = addTwoNumbers(node1, node5);
console.log(sum);