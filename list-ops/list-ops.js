export class List {
  constructor(array) {
    this.values = array;
  }

  append(toAppend) {
    if (!toAppend.values || !this.values) {
      return this;
    } else {
      let len = this.length();
      for (let i = 0; i < toAppend.length(); i++) {
        this.values[len + i] = toAppend.values[i];
      }
    }
    return this;
  }

  concat(toConcat) {
    let newArr = [];
    if (!toConcat.values || !this.values) {
      return new List([]);
    } else {

      // Goes through each array
      for (let i = 0; i < toConcat.length(); ++i) {
        
        //console.log(toConcat.values[i].values);
        //console.log(this.length(toConcat.values[i].values))

        // For each array look up the values inside that array and add them to newArr
        for (let j = 0; j < this.length(toConcat.values[i].values); ++j) {
          //console.log(toConcat.values[i].values[j]);
          newArr.push(toConcat.values[i].values[j]);
        }
      }
    }
    //console.log(newArr);
    return this.append(new List(newArr));
  }

  filter(func) {
    let newArr = [];
    for (let i = 0; i < this.length(); ++i) {
      if(this.map(func).values[i]) {
        newArr.push(this.values[i]);
      }
    }
    return {values: newArr};
  }

  map(func) {
    let newArr = [];
    for (let i = 0; i < this.length(); ++i) {
      newArr.push(func(this.values[i]));
    }
    return {values: newArr};
  }

  length(array=this.values) {
    let done = false;
    let count = 0;
    if(!array) {
      return 0;
    }
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

//const list1 = new List([1,2,3]);
//const list2 = new List([[1,2,3], [3,5,6], [5,8,8,3]]);
//console.log(list1.append(list2).values);
//console.log(list1.concat(list2).values);

//const list1 = new List([1, 2]);
//const list2 = new List([3]);
//const list3 = new List([]);
//const list4 = new List([4, 5, 6]);
//const listOfLists = new List([list2, list4]);
//console.log(list1.concat(listOfLists));

//const list1 = new List([1,2,3]);
//console.log(list1.map(el => ++el));
//console.log(list1);

//const list1 = new List([1, 2, 3, 5]);
//console.log(list1.filter(el => el % 2 === 1));