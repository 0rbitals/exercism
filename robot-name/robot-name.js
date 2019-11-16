function randomFromRange(start, stop) {
  let range = [...Array(stop+1).keys()];
  range = range.slice(start);
  return range[Math.floor(Math.random() * range.length)];
}

export class Robot {
  constructor() {
    this.name = this.GenerateName().join('');
  }

  AddToSet(name) {
    let set = new Set();
    set.add(name.join(''));
    this.set = set;
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
    this.AddToSet(name);
    return name;
  }

  reset() {
    let newName = this.GenerateName().join('');
    if (this.set.has(newName)) {
      newName = this.GenerateName().join('');
    }
    this.name = this.GenerateName().join('');
    this.set.add(newName);
  }

 }

Robot.releaseNames = () => { };
const robot = new Robot()
console.log(robot.name)
console.log(robot.reset())
console.log(robot)