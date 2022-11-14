import SuperGalacticAgeCalculator from "./../src/js/super-galactic-age-calculator.js";

describe('SuperGalacticAgeCalculator class', () => {
  
  test('1. It should create SuperGalacticAgeCalculator object with Earth years 31', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    expect(ageInput.earthYears).toEqual(31);
  });

  test('2. It should add earthYearsToLive to SuperGalacticAgeCalculator object', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.usLifeExpectancy();
    expect(ageInput.earthYearsToLive).toEqual(46);
  });
});