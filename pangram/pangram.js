export const isPangram = (text) => {
  if(text) { 
    return text.match(/([a-z])(?!.*\1)/gi).length === 26;
  } else {
    return false;
  }
  };