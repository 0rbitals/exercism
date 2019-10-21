export const isPangram = (text) => {
  const arr = text.toLowerCase().split('');
  let isPangram = true;
  for (let i = 97; i < 123; i++) {
    if(isPangram) {
      isPangram = arr.includes(String.fromCharCode(i));
    }
  }
  return isPangram;
  };