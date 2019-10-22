export const isPangram = (text) => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const lettersInText = text.toLowerCase().split('');
  const isPangram = alphabet.every((letter) => lettersInText.includes(letter));
  return isPangram;
};