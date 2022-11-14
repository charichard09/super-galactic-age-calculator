export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  earthLifeExpectancy() {
    const lifeExpectancy = 77 - this.earthYears;
    this.earthYearsToLive = `You have ${lifeExpectancy} Earth years to live.`;
  } 
}