const form = document.querySelector('#forgot-password-form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const email = form.email.value;

  
  alert('Un e-mail de réinitialisation de mot de passe a été envoyé à ' + email);
});
