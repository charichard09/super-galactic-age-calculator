export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  earthLifeExpectancy() {
    if (this.earthYears <= 73) {
      const lifeExpectancy = 73 - this.earthYears;
      this.earthYearsToLive = `You have ${lifeExpectancy} Earth years to live.`;
    } else {
      const lifeExpectancyOver = this.earthYears - 73;
      this.earthYearsPastYearsToLive = `You have lived ${lifeExpectancyOver} year over Earths avg life expectancy.`;
    }
  } 

  mercury() {
    const earthYearsConverted = (1/.24) * this.earthYears;
    return `Your age on Mercury is ${parseInt(earthYearsConverted)} years old`;
  }
}