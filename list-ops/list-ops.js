export class List {
  constructor(array) {
    this.array = array;
  }

  append(toAppend) {
    if (!toAppend && !this.array) {
      return [];
    } else if (!toAppend) {
      return this.array;
    } else {
      let len = this.length();
      for (let i = 0; i < toAppend.length(); i++) {
        this.array[len + i] = toAppend.array[i];
      }
    }
    return this.array;
  }

  concat() {
    throw new Error("Remove this statement and implement this function");
  }

  filter() {
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length(array=this.array) {
    let done = false;
    let count = 0;
    while(!done) {
      if (!array[count]) {
        done = true;
        return count;
      } else {
        count++;
      }
    }
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}

const list1 = new List();
const list2 = new List();
console.log(list1.append(list2));