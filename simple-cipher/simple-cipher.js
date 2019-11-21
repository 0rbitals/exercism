export class Cipher {
  constructor() {
    this._key;
    this.shift = 27;
  }

  encode(string) {
    const encoded = string.split('').map(letter => String.fromCharCode(letter.charCodeAt() + this.shift % 26));
    this._key = encoded.join('');
    return this.key;
  }

  decode() {
    
  }

  get key() {
    return this._key;
  }
}

const cipher = new Cipher();
console.log(cipher.encode('ABCDE'));
console.log(cipher.key);