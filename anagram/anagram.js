export class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  matches(wordList) {
    let anagrams = [];
    wordList = wordList.map(word => word.toLowerCase());
    wordList.map((word) => {
      let count = 0;
      this.word.split('').map(letter => {
      if (word.length === this.word.length) {
        if (word.includes(letter) && !anagrams.includes(word)) {
          count++;
          if (word.length == count) {
            anagrams.push(word);
          }
        }
      }
    })
  });
    return anagrams;
  }
}

const test = new Anagram('master');
console.log(test.matches(['stream', 'pigeon', 'maters']))