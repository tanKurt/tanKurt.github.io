// Array of colors to cycle through
const colors = ["#ffffff", "#f0f8ff", "#fff0f5", "#f5f5dc", "#e6e6fa"];

let currentColorIndex = 0;

// Function to change the background color of the resume
function changeResumeColor() {
  const resumeContainer = document.querySelector(".resume-container");
  resumeContainer.style.backgroundColor = colors[currentColorIndex];

  // Update the index for the next color
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add event listener to the button
document
  .getElementById("colorChangeButton")
  .addEventListener("click", changeResumeColor);
