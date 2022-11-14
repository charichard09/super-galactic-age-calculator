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
    ageInput.lifeExpectancy();
    expect(ageInput.earthYearsToLive).toEqual(42);
  });

  test('3. It should check if over life expectancy add earthYearsPastYearsToLive', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.earthYearsPastYearsToLive).toEqual(1);
  });

  //earth()
  test('4. It should return earth years', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.earthAge()).toEqual("You are 31 in Earth years.");
  });

  test('5. It should return earth years and how long in Earth years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.earthlifeExpectancy()).toEqual("You have 42 Earth years to live.");
  });

  test('6. It should return earth years and if life expectancy less than age, how many Earth years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.earthlifeExpectancy()).toEqual("You have lived 1 years over Earths avg life expectancy.");
  });

  //mercury()
  test('6. It should return age in mercury years and how long in Mercury years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.mercury()).toEqual("You are 129 in Mercury years. You have 175 Mercury years to live.");
  });

  test('7. It should return mercury years and if life expectancy less than age, how many Mercury years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.mercury()).toEqual("You are 308 in Mercury years. You have lived 4 years over Mercurys avg life expectancy.");
  });

  //venus()
  test('8. It should return age in venus years and how long in venus years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.venus()).toEqual("You are 50 in Venus years. You have 68 Venus years to live.");
  });

  test('9. It should return venus years and if life expectancy less than age, how many venus years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.venus()).toEqual("You are 119 in Venus years. You have lived 2 years over Venus' avg life expectancy.");
  });

  //mars()
  test('10. It should return age in mars years and how long in mars years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.mars()).toEqual("You are 16 in Mars years. You have 22 Mars years to live.");
  });

  test('11. It should return mars years and if life expectancy less than age, how many mars years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.mars()).toEqual("You are 39 in Mars years. You have lived 1 years over Mars' avg life expectancy.");
  });

  //jupiter()
  test('12. It should return age in jupiter years and how long in jupiter years left to live', () => {
    let ageInput = new SuperGalacticAgeCalculator(31);
    ageInput.lifeExpectancy();
    expect(ageInput.jupiter()).toEqual("You are 3 in Jupiter years. You have 4 Jupiter years to live.");
  });

  test('13. It should return jupiter years and if life expectancy less than age, how many jupiter years over', () => {
    let ageInput = new SuperGalacticAgeCalculator(74);
    ageInput.lifeExpectancy();
    expect(ageInput.jupiter()).toEqual("You are 6 in Jupiter years. You have lived 0 years over Jupiters avg life expectancy.");
  });
});

