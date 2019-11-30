export class Cipher {
  constructor(key) {
    if (key) {
      this._key = key;
    }
  }

  encode(string) {
    if (!this._key) {
      this._key = string.split('').map(letter => String.fromCharCode(Math.random() * (123 - 97) + 97)).join('');
    }
    const encoded = string.split('').map(
      (letter, index) => 
        ((letter.charCodeAt() +
          this._key.charCodeAt(index % this._key.length) + 14) % 26) + 97)
    .map(letter => String.fromCharCode(letter))
    .join("")
    return encoded;
  }

  decode(string) {
    const decoded = string.split('').map(
      (letter, index) => 
        ((letter.charCodeAt() -
        this._key.charCodeAt(index % this._key.length) + 26) % 26) + 97)
    .map(letter => String.fromCharCode(letter))
    .join("")
    return decoded;
  }

  get key() {
    return this._key;
  }
}

const cipher = new Cipher('xbcdefghij');
console.log(cipher.encode('zlabla'));
console.log(cipher.key);
console.log(cipher.decode('wmcepf'));