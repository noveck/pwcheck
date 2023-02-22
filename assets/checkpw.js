function checkPassword() {
  const password = document.getElementById('password-input').value;
  const result = zxcvbn(password);
  const strengthElement = document.getElementById('password-strength');
  const crackTimeElement = document.getElementById('password-crack-time');
  const guessesElement = document.getElementById('password-guesses');
  const feedbackElement = document.getElementById('password-feedback');
  const scoreMeter = document.getElementById('score-meter').style.display = 'block';
  const scoreLabel = document.querySelector('label[for="score-meter"]').style.display = 'block';;

    // Update the strength message based on the password score
  switch (result.score) {
    case 0:
    case 1:
      strengthElement.innerText = 'Weak';
      strengthElement.classList.add('password-strength--weak');
      strengthElement.classList.remove('password-strength--fair');
      strengthElement.classList.remove('password-strength--good');
      scoreMeter.value = 25;
      break;
    case 2:
      strengthElement.innerText = 'Fair';
      strengthElement.classList.add('password-strength--fair');
      strengthElement.classList.remove('password-strength--weak');
      strengthElement.classList.remove('password-strength--good');
      scoreMeter.value = 50;
      break;
    case 3:
      strengthElement.innerText = 'Good';
      strengthElement.classList.add('password-strength--good');
      strengthElement.classList.remove('password-strength--weak');
      strengthElement.classList.remove('password-strength--fair');
      scoreMeter.value = 75;
      break;
    case 4:
      strengthElement.innerText = 'Excellent';
      strengthElement.classList.add('password-strength--good');
      strengthElement.classList.remove('password-strength--weak');
      strengthElement.classList.remove('password-strength--fair');
      scoreMeter.value = 100;
      break;
  }

  // Display the time it would take to crack the password
  const crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
  crackTimeElement.innerText = `Time to crack: ${crackTime}`;


  // Display the number of guesses required to crack the password
  guessesElement.innerText = `Estimated number of guesses: ${result.guesses}`;

  // Display the feedback on the password
 feedbackElement.innerText = `Feedback: ${result.feedback.warning || result.feedback.suggestions.join('\n') || 'Looks good, well done!'}`;
}
