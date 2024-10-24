const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}

let currentPanelIndex = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;
  } else if (e.key === "ArrowLeft") {
    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;
  }

  removeActiveClasses();
  panels[currentPanelIndex].classList.add("active");
});
