class ArgumentError extends Error {
  constructor(message) {
    super(message)
  }
}

class Wordy {
  constructor(question) {
    this.question = question
      .replace('?', '')
      .replace(/multiplied by/g, 'multipliedBy')
      .replace(/divided by/g, 'dividedBy')
      .split(' ')
      .slice(2);
  }

  answer() {
    const operations = {
      plus: '+',
      minus: '-',
      multipliedBy: '*',
      dividedBy: '/',
    };
    let answer;
    while (this.question.length > 1) {
      if (operations[this.question[1]]) {
        switch (true) {
          case this.question[1] === 'plus':
            answer = Number(this.question[0]) + Number(this.question[2]);
            break;
          case this.question[1] === 'minus':
            answer = Number(this.question[0]) - Number(this.question[2]);
            break;
          case this.question[1] === 'multipliedBy':
            answer = Number(this.question[0]) * Number(this.question[2]);
            break;
          case this.question[1] === 'dividedBy':
            answer = Number(this.question[0]) / Number(this.question[2]);
            break;
        }
        this.question.splice(0, 3, answer);
      } else {
        throw new ArgumentError('Invalid argument');
      }
    }
    return Number(this.question.join());
  }
}

export { Wordy as WordProblem, ArgumentError };