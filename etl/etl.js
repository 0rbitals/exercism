export const transform = (obj) => {
  let newObj = {};

  Object.values(obj).map((array, i) => {
    const key = Object.keys(obj);
    array.map((letter) => {
      newObj[letter.toLowerCase()] = Number(key[i]);
    });
  });

  return newObj;
};