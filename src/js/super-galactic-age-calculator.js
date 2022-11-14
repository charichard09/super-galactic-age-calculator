export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  earthLifeExpectancy() {
    if (this.earthYears <= 73) {
      const lifeExpectancy = 73 - this.earthYears;
      this.earthYearsToLive = lifeExpectancy;
    } else {
      const lifeExpectancyOver = this.earthYears - 73;
      this.earthYearsPastYearsToLive = lifeExpectancyOver;
    }
  } 

  earth() {
    return `You are ${this.earthYears} in Earth years. You have ${this.earthYearsToLive} Earth years to live.`;
  }

  mercury() {
    const earthYearsConverted = (1/.24) * this.earthYears;
    return `Your age on Mercury is ${parseInt(earthYearsConverted)} years old`;
  }
}