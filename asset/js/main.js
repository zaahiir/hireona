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
            this.images = images.map((img, index) => ({
                src: img,
                title: `Card ${index + 1}`,
                description: `Description for Card ${index + 1}`
            }));
            this.currentIndex = 0;
            this.init();
        }
    
        init() {
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
    
        createCard(imageData, isCenter) {
            const card = document.createElement('div');
            card.classList.add('carousel-card');
            if (isCenter) card.classList.add('active');
    
            // Custom mute icon SVG
            if (isCenter) {
                const muteIcon = document.createElement('div');
                muteIcon.classList.add('mute-icon');
                muteIcon.innerHTML = `
                    <svg fill="#ffffff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M542.86 294.4L362.3 430a10.72 10.72 0 0 0-2.71 3.25H255.53v153.2h104.06a10.58 10.58 0 0 0 2.71 3.25l180.56 135.52a10.83 10.83 0 0 0 17.34-8.66v-413.5a10.83 10.83 0 0 0-17.34-8.66zM742.6 599.41L765 577l-67.2-67.2 67.2-67.2-22.4-22.4-67.2 67.2-67.2-67.2-22.4 22.4 67.2 67.2-67.2 67.2 22.4 22.4 67.2-67.2 67.2 67.2z"></path>
                        </g>
                    </svg>
                `;
                card.appendChild(muteIcon);
            }
    
            const img = document.createElement('img');
            img.src = imageData.src;
            img.alt = 'Carousel Image';
    
            const details = document.createElement('div');
            details.classList.add('card-details');
    
            const detailsContent = document.createElement('div');
            detailsContent.classList.add('card-details-content');
    
            const textContainer = document.createElement('div');
            const titleElem = document.createElement('div');
            titleElem.textContent = imageData.title;
            const descElem = document.createElement('div');
            descElem.textContent = imageData.description;
    
            const actionBtn = document.createElement('button');
            actionBtn.classList.add('card-action-btn');
            actionBtn.innerHTML = '<i class="bi bi-arrow-right"></i>';
            actionBtn.addEventListener('click', () => this.handleCardAction(imageData));
    
            textContainer.appendChild(titleElem);
            textContainer.appendChild(descElem);
    
            detailsContent.appendChild(textContainer);
            detailsContent.appendChild(actionBtn);
    
            details.appendChild(detailsContent);
    
            card.appendChild(img);
            card.appendChild(details);
    
            return card;
        }
    
        handleCardAction(cardData) {
            alert(`Action for ${cardData.title}`);
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