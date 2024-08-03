
var typed = new Typed(".text", {
    strings: ["Frontend Developer.", "Web Developer.", "UI Designer.", "Java Developer."],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true

})

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());