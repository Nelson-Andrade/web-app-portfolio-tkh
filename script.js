function changeBackgroundColor() {
  // Toggle background gradient color
  document.body.classList.toggle("background-change");
  document.body.classList.toggle("text");
}

// Resume pdf in new window
document.getElementById("resumeBtn").addEventListener("click", function () {
  window.open("assets/Nelson Andrade-Pacheco's Resume.pdf", "_blank");
});
