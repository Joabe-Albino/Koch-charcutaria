const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let index = 0; 
function moverSlide() {
    index++;

   
    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 400}%)`;
}


setInterval(moverSlide, 6000);
