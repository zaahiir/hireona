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

    document.addEventListener('DOMContentLoaded', () => {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const carousel = document.getElementById('carousel');
        const cards = carousel.querySelectorAll('.carousel-card');

        prevBtn.addEventListener('click', () => {
            const activeIndex = Array.from(cards).findIndex(card => card.classList.contains('active'));
            cards[activeIndex].classList.remove('active');
            const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
            cards[prevIndex].classList.add('active');
        });

        nextBtn.addEventListener('click', () => {
            const activeIndex = Array.from(cards).findIndex(card => card.classList.contains('active'));
            cards[activeIndex].classList.remove('active');
            const nextIndex = (activeIndex + 1) % cards.length;
            cards[nextIndex].classList.add('active');
        });
    });