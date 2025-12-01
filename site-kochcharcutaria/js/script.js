const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const tablet = window.matchMedia("(max-width: 780px) and (min-width: 427px)");
const mobileL = window.matchMedia("(max-width: 426px");
const normal = window.matchMedia("(min-width: 781px)");

let index = 0; 
function moverSlide() {
    index++;

   
    if (index >= totalSlides) {
        index = 0;
    }

    if(normal.matches){
        slides.style.transform = `translateX(-${index * 400}%)`;
    }else if(tablet.matches){
        slides.style.transform = `translateX(-${index * 192}%)`;
    }else if(mobileL.matches){
        slides.style.transform = `translateX(-${index * 120}%)`;
    }
}


setInterval(moverSlide, 6000);
