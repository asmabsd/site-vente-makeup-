const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-btn');

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Les mots de passe ne correspondent pas');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
}

passwordInput.addEventListener('change', validatePassword);
confirmPasswordInput.addEventListener('keyup', validatePassword);

submitButton.addEventListener('click', function(event) {
  if (!confirmPasswordInput.checkValidity()) {
    event.preventDefault();
    
  }
});
