var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,      // Mobile: 1 imagem
        spaceBetween: 30,      // Espaço entre imagens
        loop: true,            // Loop infinito
        autoplay: {
            delay: 3000,       // Passa sozinho a cada 3s
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // Ponto de quebra (Breakpoint) para Desktop
        breakpoints: {
            768: {
                slidesPerView: 2,  // Desktop/Tablet: 2 imagens
                spaceBetween: 40,
            },
        }
    });