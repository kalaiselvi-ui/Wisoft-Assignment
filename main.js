let menuBtn = document.querySelector("#menu-btn");
let navMenu = document.querySelector(".navbar-collapse");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
  
  window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
  };
  