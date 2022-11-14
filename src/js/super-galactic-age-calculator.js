export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  lifeExpectancy() {
    const lifeExpectancy = 77 - this.earthYears;
    this.earthYearsToLive = lifeExpectancy;
  } 
}