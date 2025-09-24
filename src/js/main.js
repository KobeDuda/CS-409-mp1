/* Your JS here. */
console.log('Hello World!')


// Carousel stuff
function initCarousel(carouselElement) {
const track = carouselElement.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = carouselElement.querySelector('.prev');
const nextButton = carouselElement.querySelector('.next');
let currentIndex = 0;

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
});
}

// Initialize all carousels on the page
document.querySelectorAll('.carousel').forEach(initCarousel);


// Navbar resizing

navbar = document.getElementById("navbar");
navbar_children = navbar.children;
window.onscroll = function() {onScroll();};
onScroll = function() {
    if (window.scrollY > 50) {
        navbar.style.height = "110px";
        for (let i = 0; i < navbar_children.length; i++) {
            navbar_children[i].style.fontSize = "25px"
        }
    } else {
        navbar.style.height = "80px";
        for (let i = 0; i < navbar_children.length; i++) {
            navbar_children[i].style.fontSize = "15px"
        }
    }
}