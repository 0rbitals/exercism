export class Words {
  count(string) {
    let temp = [];
    let count = {};
    string.split(/[\n\t\s]/).forEach((word, index, arr) => {
      if (word !== '') {
        temp = arr.filter(el => word.toLowerCase() === el.toLowerCase());
        count[word.toLowerCase()] = temp.length;
      }
    });
    return count;
  }
}

const words = new Words;
console.log(words.count('hello  world'));
