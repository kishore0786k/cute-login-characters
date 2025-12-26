const slimes = document.querySelectorAll(".slime");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// ---- mouse tracking (when not typing password) ----
document.addEventListener("mousemove", (e) => {
  if (passwordInput.value) return; // during password, hands cover eyes

  slimes.forEach((slime) => {
    const rect = slime.getBoundingClientRect();
    const headCenterX = rect.left + rect.width / 2;
    const headCenterY = rect.top + rect.height * 0.3;

    const dx = e.clientX - headCenterX;
    const dy = e.clientY - headCenterY;

    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
    const clamped = Math.max(-25, Math.min(25, angleDeg));

    const face = slime.querySelector(".slime-face");
    face.style.transform = `translateX(-50%) rotate(${clamped}deg)`;

    const irises = slime.querySelectorAll(".iris");
    irises.forEach((iris, index) => {
      const base = index === 0 ? -3 : 3;
      const eyeOffset = Math.sin((clamped * Math.PI) / 180) * 4;
      iris.style.transform = `translateX(${base + eyeOffset}px)`;
    });
  });
});

// ---- username: suspicious side-eye ----
usernameInput.addEventListener("input", () => {
  const active = !!usernameInput.value && !passwordInput.value;

  slimes.forEach((slime) => {
    const irises = slime.querySelectorAll(".iris");
    if (active) {
      irises[0].style.transform = "translateX(-7px)";
      irises[1].style.transform = "translateX(7px)";
    } else {
      irises[0].style.transform = "translateX(-3px)";
      irises[1].style.transform = "translateX(3px)";
    }
  });
});

// ---- password: hands cover eyes, eyes close ----
passwordInput.addEventListener("input", () => {
  const covering = !!passwordInput.value;

  slimes.forEach((slime) => {
    const face = slime.querySelector(".slime-face");

    if (covering) {
      slime.classList.add("eyes-closed", "covering");
      face.style.transform = "translateX(-50%)";
    } else {
      slime.classList.remove("eyes-closed", "covering");
    }
  });
});

// ---- reset states when everything empty ----
[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("blur", () => {
    if (!usernameInput.value && !passwordInput.value) {
      slimes.forEach((slime) => {
        const face = slime.querySelector(".slime-face");
        slime.classList.remove("eyes-closed", "covering");
        face.style.transform = "translateX(-50%)";
      });
    }
  });
});
