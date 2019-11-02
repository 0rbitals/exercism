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
    if(this.head.next === null) {
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
test.push(20);
test.push(30);
console.log(test.pop());
console.log(test);
console.log(test.shift());
console.log(test.unshift(5));
console.log(test);

/*

export class LinkedList extends Node {
  constructor() {
    super();
    this.records = [];
  }
  push(num) {
    if (this.records.length < 1) {
      this.records[0] = {
        prev: null,
        next: null,
        data: num
      }
    } else {
      let index = 0;
      while (this.records[index].next !== null) {
        index++;
      }
      this.records[index + 1] = {
        prev: index,
        next: null,
        data: num
      }
      this.records[index].next = index + 1;
    }
  }

  pop() {
    let index = 0;
    while (this.records[index].next !== null) {
      index++;
    }
    const temp = this.records[index].data;
    this.records.splice(index);
    if (this.records[index-1]){
      this.records[index-1].next = null;
    }
    return temp;
  }

  shift() {
    let temp;
    for (let i = 0; i <= this.records.length; i++) {
      if (this.records[i] && this.records[i].prev === null) {
        temp = this.records[i].data;
        this.records.splice(i);
      }
    }
    return temp;
  }

  unshift(num) {
    if (this.records.length < 1) {
      this.records[0] = {
        prev: null,
        next: null,
        data: num
      }
    } else {
      let index = 0;
      while (this.records[index].prev !== null) {
        index++;
      }
      this.records[index + 1] = {
        prev: null,
        next: index,
        data: num
      }
      this.records[index].prev = index + 1;
    }
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    throw new Error("Remove this statement and implement this function");
  }
}

const test = new LinkedList();
test.unshift(10);
test.unshift(20);
console.log(test);
console.log(test.shift());
console.log(test);
console.log(test.shift());
*/