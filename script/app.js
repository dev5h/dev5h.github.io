const container = document.getElementById("intro-container");
let textToType = container.textContent.trim();
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    container.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 20); // Adjust typing speed here (in milliseconds)
  }
}

container.textContent = ""; // Clear the container
typeWriter();
