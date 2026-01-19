let currentSection = 0;
const sections = document.querySelectorAll(".panel");

function goToSection(index) {
  if (index < 0 || index >= sections.length) return;

  sections[currentSection].classList.remove("active");
  sections[index].classList.add("active");

  currentSection = index;
}

/* Mouse Scroll */
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    goToSection(currentSection + 1);
  } else {
    goToSection(currentSection - 1);
  }
});

const text = "Turning data into actionable insights.";
let index = 0;
const speed = 80; // typing speed (ms)
const typedText = document.getElementById("typedText");

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
