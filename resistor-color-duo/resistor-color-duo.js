export const value = (colors) => {
  let number = "";
  colors.forEach(color => {
    number = number + COLORS.indexOf(color);
  });
  return parseInt(number);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];