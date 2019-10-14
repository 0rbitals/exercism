export const toRna = (dnaStrands) => {
  const rna = dnaStrands.split('').map((strand) => {
    switch(strand) {
      case 'G':
        return 'C';
      case 'C':
        return 'G'
      case 'T':
        return 'A'
      case 'A':
        return 'U'
      default:
        return ''
    }
  });
  return rna.join('');
};