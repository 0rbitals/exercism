export const parse = (phrase) => {
  //Remove apostophes & underscores to make it easie
  phrase = phrase.replace("'", '').replace('_', '');
  return phrase.match(/\b[a-zA-Z]/g).join('').toUpperCase();
};

console.log(parse('Portable Network Graphics'));