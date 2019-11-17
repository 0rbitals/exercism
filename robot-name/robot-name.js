function randomFromRange(start, stop) {
  let range = [...Array(stop+1).keys()];
  range = range.slice(start);
  return range[Math.floor(Math.random() * range.length)];
}

export class Robot {

  constructor() {
    this.currentName = this.GenerateName();
    this.constructSet();
    this.AddToSet(this.currentName);
  }

  get name() {
    return this.currentName;
  }

  constructSet() {
    this.set = new Set();
  }

  AddToSet(name) {
    this.set.add(name);
  }

  GenerateName() {
    let name = [];
    for (let i = 0; i < 5; ++i) {
      if (i <= 1) {
        let random = randomFromRange(65, 90);
        name.push(String.fromCharCode(random));
      } else {
        name.push(Math.floor(Math.random() * 10));
      }
    }
    name = name.join('');
    return name;
  }

  reset() {
    let newName = this.GenerateName();
    if (this.set.has(newName)) {
      this.reset();
    } else {
      this.currentName = newName;
      this.set.add(newName);
    }
  }

 }

Robot.releaseNames = () => { };