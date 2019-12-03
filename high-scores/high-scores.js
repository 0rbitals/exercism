export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return this.scores.reduce((prev, curr) => prev > curr ? prev : curr);
  }

  get personalTopThree() {
    return this.scores.sort((a,b) => a > b).slice(-3).reverse();
  }
}

console.log(new HighScores([10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70]).personalTopThree)