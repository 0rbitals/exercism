const GIGASECONDS_IN_MILLISECONDS = 10 ** 12;
export const gigasecond = (gs) => {
  return determineFuture(gs);
};

function determineFuture(gs) {
  gs.setMilliseconds(GIGASECONDS_IN_MILLISECONDS);
  return gs;
}