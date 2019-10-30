export const steps = (num) => {
  let count = 0;
  if (num > 0) {
    if (num === 1) {
      return count;
    } else if (num % 2 === 0) {
      return steps(num/2) + (count + 1);
    } else {
      return steps(num*3+1) + (count + 1);
    }
  } else {
    throw new Error('Only positive numbers are allowed');
  }
};