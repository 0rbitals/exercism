export const transpose = (arr) => {
  let newArr = [];
  const num = arr.map((el) => el.length).sort((a,b) => a < b)[0];
  for (let i = 0; i < num; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      newArr.push(arr[j][i])
    }
    newArr.push(';');
  }
  newArr = newArr.join('').split(';');
  newArr.pop();
  return newArr;
};

console.log(transpose(['Single line.']))