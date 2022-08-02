const navLinks = document.querySelectorAll(".nav-link");

const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const logo = document.querySelector(".logo");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", function () {
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  })
})

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    // navBar.style.padding = "20px 0";
    // menuBtn.style.marginTop = "-20px";
    logo.style.width = "70px";
  }
  else {
    // navBar.style.paddingTop = "30px 0";
    logo.style.width = "120px";
  }
}