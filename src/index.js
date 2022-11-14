import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SuperGalacticAgeCalculator from './js/super-galactic-age-calculator.js';

//UI Logic
function handleSubmissionForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const ageInput = parseInt(document.querySelector('#age').value);

  const solarAge = new SuperGalacticAgeCalculator(ageInput);
  solarAge.lifeExpectancy();

  let earthLi = document.createElement("li");
  earthLi.append(solarAge.earthAge());
  document.getElementById("earth-response").append(earthLi);
}

document.getElementById("age-form").addEventListener("submit", handleSubmissionForm);

