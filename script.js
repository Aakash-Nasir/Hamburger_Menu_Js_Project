const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navlink = document.querySelectorAll(".nav-link");

navlink.forEach(n => n.addEventListener("click",closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}