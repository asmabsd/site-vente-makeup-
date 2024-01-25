
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const adresse = document.getElementById("adr");
    const telephone = document.getElementById("telephone");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    
      function isValidPhoneNumber(telephone) {
        const regex = /^[0-9]{10}$/;
        return regex.test(telephone);
      }
    });
      if (nom.value.trim() === "" || prenom.value.trim() === "" || email.value.trim() === "" || adresse.value.trim() === "" || telephone.value.trim() === "") {
        alert("Veuillez remplir tous les champs du formulaire");
      } else if (!isValidEmail(email.value)) {
        alert("Veuillez saisir une adresse e-mail valide");
      } else if (!isValidPhoneNumber(telephone.value)) {
        alert("Veuillez saisir un numéro de téléphone valide");
      } else {
        alert("Le formulaire a été soumis avec succès !");
        form.reset();
      }
    });
  
    
    document.addEventListener("DOMContentLoaded", function() {
        const btnConfirmation = document.getElementById("btn_confirmation");
      
        btnConfirmation.addEventListener("click", function() {
          alert("Merci pour votre confirmation!");
        });
      });
    