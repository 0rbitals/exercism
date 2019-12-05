export const isIsogram = (string) => {
  let isIsogram = true;
  for (let i = 0; i <= string.length; ++i) {
    if (string.toLowerCase().split(string[0].toLowerCase()).length - 1 > 1) {
      isIsogram = false;
    }
  }
  return isIsogram;
};

console.log(isIsogram('accentor'));