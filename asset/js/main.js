// NavBar Hover Effect

    document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll(".nav-links .nav-link");
        const hoverLine = document.querySelector(".hover-line");

        navLinks.forEach(link => {
            link.addEventListener("mouseover", (e) => {
                const linkRect = e.target.getBoundingClientRect();
                const parentRect = e.target.parentElement.parentElement.getBoundingClientRect();
                
                hoverLine.style.width = `${linkRect.width}px`;
                hoverLine.style.left = `${linkRect.left - parentRect.left}px`;
                hoverLine.style.opacity = 1;
            });

            link.addEventListener("mouseleave", () => {
                hoverLine.style.width = "0";
                hoverLine.style.opacity = 0;
            });
        });
    });



    // Carousel

    const galleryContainer = document.querySelector('.gallery-container');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let currentIndex = 0;
        const images = document.querySelectorAll('.gallery-container img');
        const totalImages = images.length;

        function updateCarousel() {
            const width = galleryContainer.clientWidth;
            galleryContainer.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        window.addEventListener('resize', updateCarousel);

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        updateCarousel();

    
