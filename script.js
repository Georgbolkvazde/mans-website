
// Interaktīvs paziņojums uz "Patīk" pogas nospiešanas
document.querySelector('.like-btn').addEventListener('click', function () {
    alert("Paldies, ka jums patīk!");
});

// Slaidera funkcionalitāte
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active-dot');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active-dot');
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
