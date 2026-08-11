const openlombapopup =
    document.getElementById("openlombapopup");

const closelombapopup =
    document.getElementById("closelombapopup");

const lombamodal =
    document.getElementById("lombamodal");


// ========================================
// BUKA popup
// ========================================

openlombapopup.addEventListener("click", function (event) {

    event.preventDefault();

    lombamodal.classList.add("active");

    // Mencegah halaman belakang ikut scroll
    document.body.style.overflow = "hidden";

});


// ========================================
// TUTUP popup DENGAN X
// ========================================

closelombapopup.addEventListener("click", function () {

    closepopup();

});


// ========================================
// TUTUP KETIKA KLIK AREA LUAR popup
// ========================================

lombamodal.addEventListener("click", function (event) {

    if (event.target === lombamodal) {

        closepopup();

    }

});


// ========================================
// TUTUP DENGAN ESC
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closepopup();

    }

});


// ========================================
// FUNGSI TUTUP popup
// ========================================

function closepopup() {

    lombamodal.classList.remove("active");

    // Kembalikan scroll halaman
    document.body.style.overflow = "";

}