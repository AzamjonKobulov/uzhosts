// Toggle mobile menu visibility
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

// Close the mobile menu when any link or button is clicked
const mobileMenuLinksAndButtons = document.querySelectorAll(
  "#mobileMenu a, #mobileMenu button"
);

mobileMenuLinksAndButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.add("hidden");
    document.body.classList.toggle("overflow-hidden");
  });
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

// Select buttons and plans
const buttons = document.querySelectorAll(".tab-button");
const plans = document.querySelectorAll(".plan");

// Add event listener for each button to update prices
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("tab-active"));
    button.classList.add("tab-active"); // Add active class to clicked button

    // Get the period from the button data
    const period = parseInt(button.dataset.period);

    // Loop through each plan and update the price based on the selected period
    plans.forEach((plan) => {
      const baseOriginalPrice = parseFloat(plan.dataset.originalPrice);
      const discount = parseFloat(plan.dataset.discount);
      const basePrice = parseFloat(plan.dataset.price);

      // Calculate the discounted price
      const discountedPrice =
        baseOriginalPrice - baseOriginalPrice * (discount / 100);

      // Update the cost text and original price
      plan.querySelector(".price").textContent = (
        discountedPrice * period
      ).toFixed(2);
      plan.querySelector(".original-price").textContent = (
        baseOriginalPrice * period
      ).toFixed(2);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the current page URL
  const currentUrl = window.location.pathname;

  // Select all navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Loop through each link and compare its href with the current URL
  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname; // Get the absolute path of the link
    if (linkPath === currentUrl) {
      link.classList.add("font-bold"); // Add the active class
    } else {
      link.classList.remove("font-bold"); // Ensure others don't have the class
    }
  });
});
