// ======================================
// COUNTDOWN FIKAR XIV
// ======================================

// Ganti tanggal sesuai hari pembukaan FIKAR XIV
const targetDate = new Date("November 15, 2026 00:00:00").getTime();

const countdown = () => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        clearInterval(timer);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

}

countdown();

const timer = setInterval(countdown,1000);