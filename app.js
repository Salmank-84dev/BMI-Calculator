function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (!weight || !height) {
    alert("Please enter both values.");
    return;
  }

  let meters = Number(height) * 0.3048;
  let bmi = Number(weight) / (meters * meters);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
  } else {
    category = "Overweight";
  }

  document.getElementById("result").innerHTML =
    `Your BMI is <strong>${bmi.toFixed(1)}</strong>. You are in the <strong>${category}</strong> range.`;
}
