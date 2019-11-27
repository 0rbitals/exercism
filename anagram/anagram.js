export class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(wordList) {
    let anagrams = [];
    wordList.map((word) => {
      let count = 0;
      this.word.split('').map(letter => {
      if (word.includes(letter) && !anagrams.includes(word)) {
        count++;
        if (word.length == count) {
          anagrams.push(word);
        }
      }
    })
  });
    return anagrams;
  }
}

const test = new Anagram('test');
console.log(test.matches(['test', 'hmida', 'mehdi', 'tset', 'sett']))