export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    //this.value = value;
    Object.defineProperty(this, "value", {value: value});
  }
}

export class ComputeCell extends InputCell {
  constructor(inputCells, fn) {
    /*this.value = fn(inputCells);
    this.fn = fn; */
  }

  addCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }

  removeCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}

export class CallbackCell {
  constructor(fn) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}

const myInput = new InputCell(10);
const myInput2 = new InputCell(12);
const myComputer = new ComputeCell([myInput, myInput2], inputCells => inputCells[0].value + 1);
console.log(myComputer.value);
console.log(myInput.value);
myInput.setValue(17);
console.log(myComputer.value);
console.log(myInput.value);