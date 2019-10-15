const earthYear = 31557600;
export const age = (planet, ageInSeconds) => {
  const orbitalPeriods = {
    mercury: earthYear * 0.2408467,
    venus: earthYear * 0.61519726,
    earth: earthYear,
    mars: earthYear * 1.8808158,
    jupiter: earthYear * 11.862615,
    saturn: earthYear * 29.447498,
    uranus: earthYear * 84.016846,
    neptune: earthYear * 164.79132,
  }
  const ageInPlanet = (ageInSeconds / orbitalPeriods[planet]).toFixed(2);
  return Number(ageInPlanet);
};