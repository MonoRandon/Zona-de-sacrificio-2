let currentIndex = 1; // Comenzamos desde la primera diapositiva real
let isAnimating = false;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const visibleSlides = totalSlides - 2; // Número de diapositivas reales

    if (!isAnimating) {
        isAnimating = true;

        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * 100}%)`;

        currentIndex = index;

        if (currentIndex === 0) {
            setTimeout(() => {
                slides.style.transition = "none";
                slides.style.transform = `translateX(-${visibleSlides * 100}%)`;
                currentIndex = visibleSlides;
                isAnimating = false;
            }, 500); // Tiempo de la transición debe coincidir con el CSS
        } else if (currentIndex === visibleSlides + 1) {
            setTimeout(() => {
                slides.style.transition = "none";
                slides.style.transform = "translateX(-100%)";
                currentIndex = 1;
                isAnimating = false;
            }, 500);
        } else {
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    slides.style.transform = "translateX(-100%)"; // Comienza desde la primera diapositiva real

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});
