export class Squares {
  constructor(num) {
    this.sequence = [];
    this.squared = [];
    for (let i = 0; i <= num; i++) {
      this.sequence.push(i);
      this.squared.push(i**2);
    }
  }

  get sumOfSquares() {
    return this.squared.reduce((acc, curr) => acc + curr);
  }

  get squareOfSum() {
    return this.sequence.reduce((acc, curr) => {
      return acc + curr
    }) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}