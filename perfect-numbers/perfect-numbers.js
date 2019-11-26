export const classify = (num) => {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  } else if (num === 1) {
    return 'deficient';
  }
  let factors = [];
  for (let i = num-1; i >= 1; --i) {
    if (num % i == 0) {
      console.log(i)
      factors.push(i);
    }
  }
  const aliquotSum = factors.reduce((acc, next) => acc + next);
  switch (true) {
    case aliquotSum === num:
      return 'perfect';
    case aliquotSum > num:
      return 'abundant';
    case aliquotSum < num:
      return 'deficient';
  }
};