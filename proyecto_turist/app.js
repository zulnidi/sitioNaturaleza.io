'use strict';


document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ ¡Tu reservación ha sido enviada con éxito!");
  this.reset();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("📩 Gracias por tu mensaje, pronto nos pondremos en contacto contigo.");
  this.reset();
});

// Inicialización del slider
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
