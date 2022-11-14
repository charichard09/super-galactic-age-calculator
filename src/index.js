import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SuperGalacticAgeCalculator from './js/super-galactic-age-calculator.js';

//UI Logic
function handleSubmissionForm(event) {
  event.preventDefault();
  document.querySelector('#age').innerText = null;
  document.getElementById("yes-div").removeAttribute("class");
  const ageInput = parseInt(document.querySelector('#age').value);

  const solarAge = new SuperGalacticAgeCalculator(ageInput);
  solarAge.lifeExpectancy();

  addEarthInfo(solarAge);
  addMercuryInfo(solarAge);
  addVenusInfo(solarAge);
}

function handleYesButton() {
  document.getElementById("yes-div").setAttribute("class", "hidden");
  for (const p of Array.from(document.querySelectorAll("p"))) {
    p.removeAttribute("class");
  }
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

