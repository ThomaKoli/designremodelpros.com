document.addEventListener('DOMContentLoaded', function () {

    // Testimonial Slider Logic
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the correct slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Loop back to the first slide
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Loop back to the last slide
        }
        showSlide(currentSlide);
    }

    // Event Listeners for slider buttons
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Optional: Auto-play the slider
    let slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds

    // Pause auto-play on hover
    const slider = document.querySelector('.testimonial-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 7000);
        });
    }

    // Initialize the first slide
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

});