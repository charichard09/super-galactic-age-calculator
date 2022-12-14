import SuperGalacticAgeCalculator from "./../src/js/super-galactic-age-calculator.js";

describe('SuperGalacticAgeCalculator class', () => {
  
  test('1. It should create SuperGalacticAgeCalculator object with Earth years 31', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    expect(ageInput.earthYears).toEqual(31);
  });

  test('2. It should add earthYearsToLive to SuperGalacticAgeCalculator', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.earthYearsToLive).toEqual(42);
  });

  test('3. It should check if over life expectancy add earthYearsPastYearsToLive', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.earthYearsPastYearsToLive).toEqual(1);
  });

  test('4. It should return earth years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.earthAge()).toEqual("You are 31 in Earth years.");
  });

  test('5. It should return how long in Earth years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.earthLifeExpectancy()).toEqual("You have 42 Earth years to live.");
  });

  test('6. It should return if life expectancy less than age, how many Earth years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.earthLifeExpectancy()).toEqual("You have lived 1 years over Earths avg life expectancy.");
  });

  test('7. It should return age in mercury years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.mercuryAge()).toEqual("You are 129 in Mercury years.");
  });

  test('8. It should return how long in Mercury years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.mercuryLifeExpectancy()).toEqual("You have 175 Mercury years to live.");
  });

  test('9. It should return if life expectancy less than age, how many Mercury years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.mercuryLifeExpectancy()).toEqual("You have lived 4 years over Mercurys avg life expectancy.");
  });

  test('10. It should return age in venus years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.venusAge()).toEqual("You are 50 in Venus years.");
  });

  test('11. It should return how long in venus years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.venusLifeExpectancy()).toEqual("You have 68 Venus years to live.");
  });

  test('12. It should return if life expectancy less than age, how many venus years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.venusLifeExpectancy()).toEqual("You have lived 2 years over Venus' avg life expectancy.");
  });

  test('13. It should return age in mars years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.marsAge()).toEqual("You are 16 in Mars years.");
  });

  test('14. It should return how long in mars years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.marsLifeExpectancy()).toEqual("You have 22 Mars years to live.");
  });

  test('15. It should return if life expectancy less than age, how many mars years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.marsLifeExpectancy()).toEqual("You have lived 1 years over Mars' avg life expectancy.");
  });

  test('16. It should return age in jupiter years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.jupiterAge()).toEqual("You are 3 in Jupiter years.");
  });

  test('17. It should return how long in jupiter years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.jupiterLifeExpectancy()).toEqual("You have 4 Jupiter years to live.");
  });

  test('18. It should return if life expectancy less than age, how many jupiter years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.jupiterLifeExpectancy()).toEqual("You have lived 0 years over Jupiters avg life expectancy.");
  });
});

