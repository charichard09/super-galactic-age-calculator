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
    let lifeExpectancy = "";
    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${this.earthYearsToLive} Earth years to live.`;
    } else {
      lifeExpectancy = `You have lived ${this.earthYearsPastYearsToLive} year over Earths avg life expectancy.`;
    }
    return `You are ${this.earthYears} in Earth years. ${lifeExpectancy}`;
  }

  mercury() {
    const earthYearsConverted = (1/.24) * this.earthYears;
    let lifeExpectancy = "";
    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${(1/.24) * this.earthYearsToLive} Mercury years to live.`;
    }
    return `You are ${parseInt(earthYearsConverted)} in Mercury years. ${lifeExpectancy}`;
  }
}