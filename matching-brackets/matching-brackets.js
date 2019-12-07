export const matchingBrackets = (string) => {
  let newString = string;
  for (let i = 0; i < string.length/2; ++i) {
    newString = newString.split('()').join('');
    newString = newString.split('[]').join('');
    newString = newString.split('{}').join('');
  }
  return newString.length === 0 ? true : false;
};

console.log(matchingBrackets('{([()])}'))