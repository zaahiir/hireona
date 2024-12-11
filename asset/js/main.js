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

    class CardCarousel {
        constructor(carouselElement, images) {
            this.carousel = carouselElement;
            this.images = images;
            this.currentIndex = 0;
            this.init();
        }

        init() {
            // Populate initial carousel
            this.renderCards();
            this.addEventListeners();
            this.updateActiveCard();
        }

        renderCards() {
            this.carousel.innerHTML = '';
            const visibleCards = 5;
            const startIndex = this.currentIndex;

            for (let i = 0; i < visibleCards; i++) {
                const imageIndex = (startIndex + i) % this.images.length;
                const card = this.createCard(this.images[imageIndex], i === Math.floor(visibleCards / 2));
                this.carousel.appendChild(card);
            }
        }

        createCard(imageSrc, isCenter) {
            const card = document.createElement('div');
            card.classList.add('carousel-card');
            if (isCenter) card.classList.add('active');

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Carousel Image';

            const details = document.createElement('div');
            details.classList.add('card-details');
            details.textContent = 'Card Details';

            card.appendChild(img);
            card.appendChild(details);

            return card;
        }

        addEventListeners() {
            document.querySelector('.prev-btn').addEventListener('click', () => this.movePrev());
            document.querySelector('.next-btn').addEventListener('click', () => this.moveNext());
        }

        movePrev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.renderCards();
            this.updateActiveCard();
        }

        moveNext() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.renderCards();
            this.updateActiveCard();
        }

        updateActiveCard() {
            const cards = this.carousel.querySelectorAll('.carousel-card');
            cards.forEach((card, index) => {
                card.classList.toggle('active', index === Math.floor(cards.length / 2));
            });
        }
    }

    // Sample image URLs - replace with your actual image paths
    const images = [
        'asset/img/slider1.webp',
        'asset/img/slider2.webp',
        'asset/img/group3.webp',
        'asset/img/slider4.webp',
        'asset/img/group5.webp',
        // Add more images as needed
    ];

    document.addEventListener('DOMContentLoaded', () => {
        const carouselElement = document.getElementById('carousel');
        new CardCarousel(carouselElement, images);
    });

    
