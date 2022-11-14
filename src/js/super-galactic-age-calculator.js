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
      lifeExpectancy = `You have lived ${this.earthYearsPastYearsToLive} years over Earths avg life expectancy.`;
    }
    return `You are ${this.earthYears} in Earth years. ${lifeExpectancy}`;
  }

  mercury() {
    const earthYearsConverted = (1/.24) * this.earthYears;
    let lifeExpectancy = "";
    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/.24) * this.earthYearsToLive)} Mercury years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/.24) * this.earthYearsPastYearsToLive)} years over Mercurys avg life expectancy.`;
    }
    return `You are ${Math.round(earthYearsConverted)} in Mercury years. ${lifeExpectancy}`;
  }

  venus() {
    const earthYearsConverted = (1/.62) * this.earthYears;
    let lifeExpectancy = "";
    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/.62) * this.earthYearsToLive)} Venus years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/.62) * this.earthYearsPastYearsToLive)} years over Venus' avg life expectancy.`;
    }
    return `You are ${Math.round(earthYearsConverted)} in Venus years. ${lifeExpectancy}`;
  }
}