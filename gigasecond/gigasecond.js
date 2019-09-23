export const gigasecond = (gs) => {
  let gigasecondsInMilliseconds = 10 ** 12;
  gs.setMilliseconds(gigasecondsInMilliseconds);
  return gs;
};