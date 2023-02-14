let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

// Valider le formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Empêcher l'envoi du formulaire
    event.preventDefault();
  
    // Référence au formulaire
    const form = event.target;
  
    // Récupérer les valeurs des champs
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
  
    // Validation de l'email
    if (!email.includes("@")) {
      alert("Adresse email non valide");
      return;
    }
  
    // Validation du message
    if (message.length < 10) {
      alert("Le message doit contenir au moins 10 caractères");
      return;
    }
  
    // Envoi des données
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
 // Effacer les valeurs des champs après soumission
form.elements.name.value = "";
form.elements.email.value = "";
form.elements.message.value = "";

// Afficher un message de réussite
alert("Formulaire soumis avec succès");
});


