const GIGASECONDS_IN_MILLISECONDS = 10 ** 12;
export const gigasecond = (gs) => {
  const newDate = new Date(gs.getTime() + GIGASECONDS_IN_MILLISECONDS);
  return newDate;
};