const eyeButton = document.getElementById("eye"),
  passwordInput = document.getElementById("inputId");

eyeButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
