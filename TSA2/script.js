function animateBox(day) {
  const boxContainer = document.getElementById("box-container");

  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.textContent = day;

  boxContainer.appendChild(newBox);

  requestAnimationFrame(() => {
    newBox.style.transform = "translateY(200px)";
  });

  setTimeout(() => {
    while (boxContainer.children.length > 1) {
      boxContainer.removeChild(boxContainer.firstChild);
    }
  }, 600);
}
