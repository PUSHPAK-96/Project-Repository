

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});
