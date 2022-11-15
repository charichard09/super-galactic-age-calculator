import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SuperGalacticAgeCalculator from './js/super-galactic-age-calculator.js';


function handleSubmissionForm(event) {
  event.preventDefault();
  reset();

  const ageInput = parseInt(document.querySelector('#age').value);

  const solarAge = new SuperGalacticAgeCalculator(ageInput);
  solarAge.lifeExpectancy();

  addEarthInfo(solarAge);
  addMercuryInfo(solarAge);
  addVenusInfo(solarAge);
  addMarsInfo(solarAge);
  addJupiterInfo(solarAge);
}

function reset() {
  document.querySelector('#age').innerText = null;
  document.getElementById("yes-div").removeAttribute("class");
  for (const li of Array.from(document.querySelectorAll("li"))) {
    li.remove();
  }
}

function handleYesButton() {
  document.getElementById("yes-div").setAttribute("class", "hidden");
  for (const p of Array.from(document.querySelectorAll("p"))) {
    p.removeAttribute("class");
  }
}

function addJupiterInfo(solarAgeObj) {
  let jupiterLi = document.createElement("li");
  let jupiterP = document.createElement("p");
  jupiterLi.append(solarAgeObj.jupiterAge());
  jupiterP.append(solarAgeObj.jupiterLifeExpectancy());
  jupiterP.setAttribute("class", "hidden");
  jupiterLi.append(jupiterP);
  document.getElementById("jupiter-response").append(jupiterLi);
}

function addMarsInfo(solarAgeObj) {
  let marsLi = document.createElement("li");
  let marsP = document.createElement("p");
  marsLi.append(solarAgeObj.marsAge());
  marsP.append(solarAgeObj.marsLifeExpectancy());
  marsP.setAttribute("class", "hidden");
  marsLi.append(marsP);
  document.getElementById("mars-response").append(marsLi);
}

function addVenusInfo(solarAgeObj) {
  let venusLi = document.createElement("li");
  let venusP = document.createElement("p");
  venusLi.append(solarAgeObj.venusAge());
  venusP.append(solarAgeObj.venusLifeExpectancy());
  venusP.setAttribute("class", "hidden");
  venusLi.append(venusP);
  document.getElementById("venus-response").append(venusLi);
}

function addMercuryInfo(solarAgeObj) {
  let mercuryLi = document.createElement("li");
  let mercuryP = document.createElement("p");
  mercuryLi.append(solarAgeObj.mercuryAge());
  mercuryP.append(solarAgeObj.mercuryLifeExpectancy());
  mercuryP.setAttribute("class", "hidden");
  mercuryLi.append(mercuryP);
  document.getElementById("mercury-response").append(mercuryLi);
}

function addEarthInfo(solarAgeObj) {
  let earthLi = document.createElement("li");
  let earthP = document.createElement("p");
  earthLi.append(solarAgeObj.earthAge());
  earthP.append(solarAgeObj.earthLifeExpectancy());
  earthP.setAttribute("class", "hidden");
  earthLi.append(earthP);
  document.getElementById("earth-response").append(earthLi);
}

document.getElementById("age-form").addEventListener("submit", handleSubmissionForm);
document.getElementById("yes-button").addEventListener("click", handleYesButton);

