export const value = (colors) => {
  colors = colors.map(color => {
    return COLORS.indexOf(color);
  }).join('');

  return Number(colors);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];