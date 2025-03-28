document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".restaurant-card");
  let restaurantGrid = document.querySelector(".restaurant-container");
  let detailView = document.querySelector(".restaurant-detail");
  let mainMenuBtn = document.querySelector(".main-menu-btn");
  let detailContent = detailView.querySelector(".detail-content"); // Assuming a container for details exists
  let detailImg = document.getElementById("detail-img"); // Target the image in the detail section

  const restaurantDetails = {
    "GABEL LOFFEL": {
      address: "235 GLENDALE AVE. MERIDIEN CITY",
      phone: "T: 490 49 4000",
      website: "W: GANDG.RES",
      category: "SWISS",
      hours: "10AM to 10PM",
      price: "$$$",
      description:
        "Experience authentic Swiss cuisine in an elegant and cozy ambiance. Famous for its cheese fondue and traditional rösti, Gabel Loffel brings the taste of Switzerland to Meridien City.",
      image: "images/swiss2.jpeg",
    },

    "GARY GARI": {
      address: "57 MIDWAY ST. MERIDIEN CITY",
      phone: "T: 678 89 1001",
      website: "W: GARYGARI.COM",
      category: "JAPANESE",
      hours: "11AM to 9PM",
      price: "$$",
      description:
        "A vibrant and contemporary Japanese dining experience, Gary Gari brings the finest sushi, savory ramen, and expertly crafted tempura to Meridien City. With its sleek interior and welcoming ambiance, it's the perfect place for an unforgettable meal.",
      image: "images/sushi.jpg",
    },

    "IL PIATTO": {
      address: "312 VENEZIA BLVD. MERIDIEN CITY",
      phone: "T: 456 78 9000",
      website: "W: ILPIATTO.IT",
      category: "ITALIAN",
      hours: "12PM to 11PM",
      price: "$$$",
      description:
        "A slice of Italy in Meridien City! Il Platto is known for its handmade pasta, wood-fired pizzas, and rich, flavorful sauces that bring the authentic Italian experience to life.",
      image: "images/ricotta.jpg",
    },

    "PIERRE PLATTERS": {
      address: "120 FRENCH SQUARE, MERIDIEN CITY",
      phone: "T: 234 56 7890",
      website: "W: PIERREPLATTERS.FR",
      category: "FRENCH",
      hours: "8AM to 10PM",
      price: "$$$",
      description:
        "Classic French cuisine with a modern twist. Pierre Platters specializes in gourmet charcuterie boards, artisanal cheeses, and elegant pastries that delight every palate.",
      image: "images/frenchfood1.jpg",
    },
  };

  // Function to fade in an element
  function fadeIn(element) {
    element.style.display = "flex"; // Ensures it's visible before animation
    element.style.opacity = 0;
    let opacity = 0;
    let interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }

  // Function to fade out an element
  function fadeOut(element, callback) {
    let opacity = 1;
    let interval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
        element.style.display = "none"; // Hides it after animation
        if (callback) callback();
      }
    }, 30);
  }

  // Hover effect for description
  cards.forEach((card) => {
    let description = card.querySelector(".description");

    card.addEventListener("mouseenter", function () {
      description.style.display = "block";
      description.style.opacity = "1";
    });

    card.addEventListener("mouseleave", function () {
      description.style.opacity = "0";
      setTimeout(() => {
        description.style.display = "none";
      }, 200);
    });

    // Click event to show restaurant details
    card.addEventListener("click", function () {
      let restaurantName = card
        .querySelector(".card-header")
        .textContent.trim();
      let details = restaurantDetails[restaurantName];

      if (details) {
        detailContent.innerHTML = `
          <h2 style="color: #d32f2f;">${restaurantName}</h2>
          <p><strong>${details.address}</strong></p>
          <p>${details.phone}</p>
          <p>${details.website}</p>
          <hr>
          <p><strong>Category:</strong> ${details.category}</p>
          <p><strong>Open:</strong> ${details.hours}</p>
          <p><strong>Price:</strong> ${details.price}</p>
          <hr>
          <p>${details.description}</p>
        `;
      }

      fadeOut(restaurantGrid, function () {
        detailView.style.display = "block"; // Ensure detail view is visible
        fadeIn(detailView);
      });
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      let restaurantName = card
        .querySelector(".card-header")
        .textContent.trim();
      let details = restaurantDetails[restaurantName];

      if (details) {
        detailImg.src = details.image; // Change the image dynamically
        detailContent.innerHTML = `
          <h2 style="color: #d32f2f;">${restaurantName}</h2>
          <p><strong>${details.address}</strong></p>
          <p>${details.phone}</p>
          <p>${details.website}</p>
          <hr>
          <p><strong>Category:</strong> ${details.category}</p>
          <p><strong>Open:</strong> ${details.hours}</p>
          <p><strong>Price:</strong> ${details.price}</p>
          <hr>
          <p>${details.description}</p>
        `;
      }
    });
  });

  // Click event to go back to main menu
  mainMenuBtn.addEventListener("click", function () {
    fadeOut(detailView, function () {
      restaurantGrid.style.display = "flex"; // Ensures the grid is visible
      fadeIn(restaurantGrid);
    });
  });
});
