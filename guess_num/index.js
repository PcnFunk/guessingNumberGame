let rightNum = Math.floor(Math.random() * 10 + 1);
let attempts = 0;

document.getElementById("submitBtn").onclick = function () {
  let guess = document.getElementById('choice').value;
  attempts++;

  if (guess == rightNum) {
    alert(`You wrote right number with ${attempts} attempts!`);
  }
  else if (guess < rightNum) {
    alert('To small!')
  }
  else if (guess > rightNum) {
    alert('To large!')
  }
}
