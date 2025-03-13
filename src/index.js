import "./styles.css"

const slides = document.querySelectorAll("li.slide");
const nextButton = document.querySelector("button.next");
const prevButton = document.querySelector("button.prev");
const dots = document.querySelectorAll("input.nav-dot");

const length = slides.length;
let currentSlide = 0;


const jumpSlide = (index) => {
    hideSlide(slides[currentSlide]);
    currentSlide = checkBound(index);
    showSlide(slides[currentSlide]);
};

const nextSlide = () => {
    hideSlide(slides[currentSlide]);
    currentSlide = checkBound(++currentSlide);
    showSlide(slides[currentSlide]);
};

const previosSlide = () => {
    hideSlide(slides[currentSlide]);
    currentSlide = checkBound(--currentSlide);
    showSlide(slides[currentSlide]);
};

const showSlide = (slide) => {
    slide.classList.add("show");
    dots[currentSlide].checked = true;
};

const hideSlide = (slide) => {
    slide.classList.remove("show");
};

const checkBound = (bound) => {
    if(bound >= length) {
        return 0;
    } else if(bound < 0) {
        return length - 1;
    }

    return bound;
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previosSlide);
dots[currentSlide].checked = true;
for(let dot of dots) {
    dot.addEventListener("click", function () {
        this.checked = true;
        const index = Array.from(dots).indexOf(this);

        jumpSlide(index);
    });    
}
setInterval(nextSlide, 6000);