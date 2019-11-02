class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {

  createHead(data) {
    this.head = new Node(data);
  }

  push(data) {
    if (!this.head) {
      this.createHead(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data, current.next);
    }
  }

  pop() {
    let current = this.head;
    let temp;
    if(!this.head.next) {
      temp = current.data;
      this.head = null;
    } else {
      let previous;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      temp = previous.next.data;
      previous.next = null;
    }
    return temp;
  }

  shift() {
    const temp = this.head.data;
    this.head = this.head.next;
    return temp;
  }

  unshift(data) {
    if (!this.head) {
      this.createHead(data);
    } else {
      this.head = new Node(data, this.head);
    }
  }
  
  delete(value) {
    let current = this.head;
    if (!current.next && current.data === value) {
      this.head = null;
    } else if (current.data === value) {
      this.head = current.next;
    }
    while(current.next) {
      let previous = current;
      if (current.next.data === value) {
         previous.next = current.next.next;
         return;
      } else {
        current = current.next;
      }
    }
  }

  count() {
    let current = this.head;
    let count = 0;
    while(current) {
      current = current.next;
      count++;
    }
    return count;
  }

}

const test = new LinkedList;
test.push(10);
console.log(test.delete(20));
console.log(test);
console.log(test.count());