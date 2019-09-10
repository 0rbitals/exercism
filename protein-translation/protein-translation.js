//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codonString) => {
  const codonsObj = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };
  if (codonString) {
    const rna = codonString.match(/.{3}/g);
    const proteinArr = [];
    for (let i = 0; i < rna.length; i++) {
      if (codonsObj[rna[i]] && codonsObj[rna[i]] !== 'STOP') {
        proteinArr.push(codonsObj[rna[i]]);
      }else if(!codonsObj[rna[i]]){
        throw "Invalid codon";
      }else{
        return proteinArr;
      }
    }
    return proteinArr;
  }else{
    return [];
  }
};