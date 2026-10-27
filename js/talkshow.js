
const talkshowPoster = document.getElementById("talkshowPoster");
const posterLightbox = document.getElementById("posterLightbox");
const posterLightboxImage = document.getElementById("posterLightboxImage");
const posterClose = document.getElementById("posterClose");

if (talkshowPoster && posterLightbox && posterLightboxImage && posterClose) {
    function openPoster() {
        posterLightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePoster() {
        posterLightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    talkshowPoster.addEventListener("click", openPoster);
    posterClose.addEventListener("click", closePoster);

    posterLightbox.addEventListener("click", function (event) {
        if (
            event.target === posterLightbox ||
            event.target === posterLightboxImage
        ) {
            closePoster();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            posterLightbox.classList.contains("active")
        ) {
            closePoster();
        }
    });
}
