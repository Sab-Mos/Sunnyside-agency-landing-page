let bars = document.querySelector(".icon-bars");

let nav = document.querySelector(".top-section .main-nav");

let navList = document.querySelector(".main-nav ul");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  nav.classList.toggle("active");
  navList.classList.toggle("active");
});
