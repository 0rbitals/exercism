export const transpose = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length+1; ++i) {
    if(arr[0][1] && arr[1][i]) {
      newArr.push(arr[0][i] + arr[1][i])
    }
  }
  return newArr;
};

console.log(transpose(['Single line.']))