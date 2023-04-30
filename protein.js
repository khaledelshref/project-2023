const form = document.querySelector('#calculator-form');
const weightInput = document.querySelector('#weight');
const activityLevelInput = document.querySelector('#activity-level');
const resultDiv = document.querySelector('#result');

function calculateProtein() {
  // Get the weight and activity level values from the form
  const weight = weightInput.value;
  const activityLevel = activityLevelInput.value;

  // Calculate the recommended daily protein intake
  const proteinIntake = weight * activityLevel;

  // Return the protein intake value as a string with the unit "g"
  return proteinIntake.toFixed(1) + ' grams';
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  const proteinIntake = calculateProtein();
  resultDiv.innerHTML = proteinIntake;
});

document.querySelector('#reset').addEventListener('click', () => {
  resultDiv.innerHTML = ''; // clear the result
});