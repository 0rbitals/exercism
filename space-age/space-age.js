const earthYear = 31557600;
export const age = (planet, ageInSeconds) => {
  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: earthYear,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const ageInPlanet = (ageInSeconds / (orbitalPeriods[planet] * earthYear)).toFixed(2);

  return orbitalPeriods[planet] === earthYear ? Number((ageInSeconds / earthYear).toFixed(2)) : Number(ageInPlanet);
};