export default class SuperGalacticAgeCalculator {
  constructor(age) {
    this.earthYears = age;
  }

  lifeExpectancy() {
    if (this.earthYears <= 73) {
      const lifeExpectancy = 73 - this.earthYears;
      this.earthYearsToLive = lifeExpectancy;
    } else {
      const lifeExpectancyOver = this.earthYears - 73;
      this.earthYearsPastYearsToLive = lifeExpectancyOver;
    }
  } 

  earthAge() {
    return `You are ${this.earthYears} in Earth years.`;
  }

  earthLifeExpectancy() {
    let lifeExpectancy = "";

    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${this.earthYearsToLive} Earth years to live.`;
    } else {
      lifeExpectancy = `You have lived ${this.earthYearsPastYearsToLive} years over Earths avg life expectancy.`;
    }
    return `${lifeExpectancy}`;
  }

  mercuryAge() {
    const earthYearsConverted = (1/.24) * this.earthYears;

    return `You are ${Math.round(earthYearsConverted)} in Mercury years.`;
  }

  mercuryLifeExpectancy() {
    let lifeExpectancy = "";

    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/.24) * this.earthYearsToLive)} Mercury years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/.24) * this.earthYearsPastYearsToLive)} years over Mercurys avg life expectancy.`;
    }
    return `${lifeExpectancy}`;
  }

  venusAge() {
    const earthYearsConverted = (1/.62) * this.earthYears;

    return `You are ${Math.round(earthYearsConverted)} in Venus years.`;
  }

  venusLifeExpectancy() {
    let lifeExpectancy = "";

    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/.62) * this.earthYearsToLive)} Venus years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/.62) * this.earthYearsPastYearsToLive)} years over Venus' avg life expectancy.`;
    }
    return `${lifeExpectancy}`;
  }

  marsAge() {
    const earthYearsConverted = (1/1.88) * this.earthYears;
    
    return `You are ${Math.round(earthYearsConverted)} in Mars years.`;
  }

  marsLifeExpectancy() {
    let lifeExpectancy = "";

    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/1.88) * this.earthYearsToLive)} Mars years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/1.88) * this.earthYearsPastYearsToLive)} years over Mars' avg life expectancy.`;
    }
    return `${lifeExpectancy}`;
  }

  jupiterAge() {
    const earthYearsConverted = (1/11.86) * this.earthYears;

    return `You are ${Math.round(earthYearsConverted)} in Jupiter years.`;
  }

  jupiterLifeExpectancy() {
    let lifeExpectancy = "";

    if (Object.hasOwn(this, "earthYearsToLive")) {
      lifeExpectancy = `You have ${Math.round((1/11.86) * this.earthYearsToLive)} Jupiter years to live.`;
    } else {
      lifeExpectancy = `You have lived ${Math.round((1/11.86) * this.earthYearsPastYearsToLive)} years over Jupiters avg life expectancy.`;
    }
    return `${lifeExpectancy}`;
  }
}