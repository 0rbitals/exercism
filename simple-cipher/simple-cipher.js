export class Cipher {
  constructor(key) {
    if (key) {
      this._key = key;
    }
    this._shift = [];
  }

  encode(string) {
    if (!this._key) {
      this._key = string.split('').map(letter => String.fromCharCode(Math.random() * (123 - 97) + 97)).join('');
    }
    this._key.split('').map(letter => this._shift.push(letter.charCodeAt() - 96 + 25));
    console.log(this._shift)
    const encoded = string.split('').map((letter, index) => String.fromCharCode(letter.charCodeAt() + this._shift[index] % 26));
    return encoded.join('');
  }

  decode(string) {
    console.log(this._shift)
    const decoded = string.split('').map((letter, index) => String.fromCharCode(letter.charCodeAt() - this._shift[index] % 26))
    return decoded.join('');
  }

  get key() {
    return this._key;
  }
}

const cipher = new Cipher();
console.log(cipher.encode('aaaaa'));
console.log(cipher.key);
console.log(cipher.decode(cipher.key));