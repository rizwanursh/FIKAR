const hamburger = document.getElementById("hamburger");

const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
    })
})