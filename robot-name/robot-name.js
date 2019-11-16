function Range(start, stop) {
  // Get numbers from start to stop
}

export class Robot {
  constructor() {
    this.name = this.GenerateName();
  }

  GenerateName() {
    let name = [];
    for (let i = 0; i < 5; ++i) {
      if (i <= 1) {
        name.push(Math.random() * 10);
      } else {
        name.push(String.fromCharCode(Math.random()));
      }
    }
    return name;
  }

 }

Robot.releaseNames = () => { };

console.log(new Robot())