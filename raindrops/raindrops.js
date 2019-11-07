export const convert = (num) => {
  let factors = [];
  let output = '';
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && (num / i) * i === num ) {
      factors.push(i);
      if (i === 3) {
        output += 'Pling';
      } else if (i === 5) {
        output += 'Plang';
      } else if (i === 7) {
        output += 'Plong';
      }
    }
  }
  return output.length < 1 ? num.toString() : output;
};