import SuperGalacticAgeCalculator from "./../src/js/super-galactic-age-calculator.js";

describe('SuperGalacticAgeCalculator class', () => {
  
  //constructor
  test('1. It should create SuperGalacticAgeCalculator object with Earth years 31', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    expect(ageInput.earthYears).toEqual(31);
  });

  //earthLifeExpectancy()
  test('2. It should add earthYearsToLive to SuperGalacticAgeCalculator', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.earthLifeExpectancy();
    expect(ageInput.earthYearsToLive).toEqual("You have 42 Earth years to live.");
  });

  test('3. It should check if over life expectancy add earthYearsPastYearsToLive', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.earthLifeExpectancy();
    expect(ageInput.earthYearsPastYearsToLive).toEqual("You have lived 1 year over Earths avg life expectancy.");
  });

  //mercury()
  test('4. It should return age in mercury years from earth years ', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    expect(ageInput.mercury()).toEqual("Your age on Mercury is 129 years old");
  });
});