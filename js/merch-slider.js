const swiper = new Swiper(".merchSwiper",{

    loop:true,

    centeredSlides:true,

    slidesPerView:3,

    spaceBetween:30,

    grabCursor:true,

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    breakpoints:{

        320:{
            slidesPerView:1.2
        },

        768:{
            slidesPerView:2
        },

        1024:{
            slidesPerView:3
        }

    }

});