export const compute = (strand1, strand2) => {
  let distance = 0;
  if (strand1.length === strand2.length) {
    strand1.split('').map((letter, index, arr) => {
      if (letter !== strand2[index]) {
        distance++;
      }
    });
  } else if (strand1.length < 1 || strand2.length < 1) {
    throw new Error(`${strand1.length < 1 ? 'left' : 'right'} strand must not be empty`);
  } else {
    throw new Error('left and right strands must be of equal length')
  }
  return distance;
};
