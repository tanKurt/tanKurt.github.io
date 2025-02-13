function animateBox(day) {
  const box = document.getElementById("animatedBox");

  // Reset animation
  box.style.transition = "none";
  box.style.top = "-150px";
  box.style.opacity = "0";

  setTimeout(() => {
    // Apply animation
    box.style.transition =
      "top 1s ease, background 0.5s ease 0.5s, opacity 0.5s ease";
    box.style.top = "150px";
    box.style.opacity = "1";

    // Change color based on the day
    const colors = {
      Monday: "#e74c3c",
      Tuesday: "#2ecc71",
      Wednesday: "#f1c40f",
      Thursday: "#9b59b6",
      Friday: "#e67e22",
      Saturday: "#1abc9c",
      Sunday: "#34495e",
    };

    box.style.background = colors[day] || "#3498db";
  }, 100);
}
