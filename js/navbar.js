const hamburger = document.getElementById("hamburger");

const navbar = document.getElementById("navbar");


// ========================================
// HAMBURGER
// ========================================

hamburger.addEventListener("click", function (event) {

    event.stopPropagation();

    navbar.classList.toggle("active");

});


// ========================================
// TUTUP KETIKA KLIK DI LUAR NAVBAR
// ========================================

document.addEventListener("click", function (event) {

    if (
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {

        navbar.classList.remove("active");

    }

});


// ========================================
// TUTUP KETIKA MENU NAVBAR DIKLIK
// ========================================

const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// ========================================
// ACTIVE NAVBAR BERDASARKAN SCROLL
// ========================================

const sections = document.querySelectorAll("section");

function updateActiveNav() {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


// ========================================
// JALANKAN SAAT SCROLL
// ========================================

window.addEventListener("scroll", updateActiveNav);


// ========================================
// JALANKAN SAAT WEBSITE SELESAI DIMUAT
// ========================================

window.addEventListener("load", updateActiveNav);