function detectMobile() {
    // Vérifier si l'appareil prend en charge le toucher
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      return true; // L'utilisateur est sur un appareil mobile
    }
    else {
      return false; // L'utilisateur est sur un ordinateur de bureau
    }
  }
  
  function displayPopup() {
    // Vérifier si l'utilisateur est sur un appareil mobile ou un ordinateur de bureau
    var isMobile = detectMobile();
  
    // Afficher le message approprié dans la popup
    if (isMobile) {
      alert("Si vous êtes sur un appareil mobile vous pouvez avoir plus d'info sur le concert qui vous intéresse il vous suffit de de cliquer sur l’évènement souhaité. \n\nEt si vous êtes sur un PC vous pouvez avoir plus d'info sur le concert qui vous intéresse il vous suffit de place le curseur sur l’évènement souhaité.");
    }
    else {
      alert("Pour avoir plus d'info sur le concert qui vous intéresse il vous suffit de place le curseur sur l’évènement souhaité.");
    }
  }
  
  // Appeler la fonction displayPopup() lorsque l'utilisateur clique sur le bouton dans le body
  var popupButton = document.getElementById("popup-button");
  popupButton.addEventListener("click", displayPopup);