export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  usLifeExpectancy() {
    const lifeExpectancy = 77 - this.age;
    this.earthYearsToLive = lifeExpectancy;
  } 
}