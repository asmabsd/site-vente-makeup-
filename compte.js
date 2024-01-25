function validateEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      alert("Adresse e-mail valide!");
    } else {
      alert("Adresse e-mail invalide! Veuillez entrer une adresse e-mail valide.");
    }
  }
  