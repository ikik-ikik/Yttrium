const cookieBox = document.querySelector(".cc"),
  buttons = document.querySelectorAll(".buttonc");

const executeCodes = () => {
  // if cookie contains cookieConsent it will be returned and below of this code will not run
  if (document.cookie.includes("cookieConsent")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      // if button has acceptBtn id
      if (button.id == "acceptBtn") {
        // set cookies for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = "cookieConsent=true; expires=" + date.toUTCString() + "; path=/";
      }
    });
  });
}

window.onload = executeCodes;

