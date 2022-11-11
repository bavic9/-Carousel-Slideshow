let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
getElementById('nextBtn')
.addEventListener('click', function() {
    nextSlide();
})

document.
getElementById('prevBtn')
.addEventListener('click', function() {
    prevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('carouse-item--hidden');
    }

    slides[slidePosition].classList.add('visible');
}


function nextSlide() {
    if(slidePosition === totalSlides -1){
        slidePosition = 0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();
}

function prevSlide() {
    if(slidePosition === 0) {
        slidePosition = totalSlides -1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition();
}