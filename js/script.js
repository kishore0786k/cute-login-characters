const characters = document.querySelectorAll(".character");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// 360-degree eye tracking
document.addEventListener("mousemove", (e) => {
  if (passwordInput.value) return;

  characters.forEach((char) => {
    const irises = char.querySelectorAll(".iris");
    const eyesWrapper = char.querySelector(".eyes-wrapper");
    const rect = eyesWrapper.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const angleDeg = (angle * 180) / Math.PI;

    irises.forEach((iris) => {
      iris.style.transform = `rotate(${angleDeg}deg) translateY(-5px)`;
    });
  });
});

// Look away on password
passwordInput.addEventListener("input", () => {
  characters.forEach((char) => {
    if (passwordInput.value) {
      char.classList.add("looking-away");
    } else {
      char.classList.remove("looking-away");
    }
  });
});

// Reset
usernameInput.addEventListener("blur", () => {
  if (!passwordInput.value) {
    characters.forEach((char) => {
      char.classList.remove("looking-away");
    });
  }
});
