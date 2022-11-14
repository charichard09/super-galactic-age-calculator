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
    expect(ageInput.earthYearsToLive).toEqual(42);
  });

  test('3. It should check if over life expectancy add earthYearsPastYearsToLive', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.earthLifeExpectancy();
    expect(ageInput.earthYearsPastYearsToLive).toEqual(1);
  });

  //earth()
  test('4. It should return earth years and how long in Earth years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.earthLifeExpectancy();
    expect(ageInput.earth()).toEqual("You are 31 in Earth years. You have 42 Earth years to live.");
  });

  test('5. It should return earth years and if life expectancy less than age, how many Earth year over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.earthLifeExpectancy();
    expect(ageInput.earth()).toEqual("You are 74 in Earth years. You have lived 1 year over Earths avg life expectancy.");
  });

  //mercury()
  test('4. It should return age in mercury years and how long in Mercury years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    expect(ageInput.mercury()).toEqual("You are 129 in Mercury years. You have 175 years to live.");
  });
});