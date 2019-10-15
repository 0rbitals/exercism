export const toRna = (dnaStrands) => {
  const dnaToRNA = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  const rna = dnaStrands.split('').map((strand) => dnaToRNA[strand]);
  return rna.join('');
};