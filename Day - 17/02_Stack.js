// Implement a Stack class with methods push, pop, peek methods

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return `Stack is empty.`;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return `Stack is empty.`;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const st = new Stack();

st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);

st.print();

console.log(st.peek());
st.pop();

console.log(st.peek());
st.print();

// Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off

const stringStack = new Stack();

stringStack.push("a");
stringStack.push("n");
stringStack.push("i");
stringStack.push("l");

let reverseStr = "";

while (!stringStack.isEmpty()) {
  reverseStr += stringStack.pop();
}

console.log("Reversed String:", reverseStr); // Output: 'lina'
