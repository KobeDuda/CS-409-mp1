/* Your JS here. */


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


// Navbar resizing and element highlighting
navbar = document.getElementById("navbar");
navbar_children = navbar.children;

mysteries = document.getElementsByClassName("mystery-title");


window.onscroll = function() {onScroll();};
onScroll = function() {
    // Position indicator
    let selected_idx = -1;
    for(let i = 0; i < mysteries.length; i++) {
        let absolute_pos = mysteries[i].getBoundingClientRect().y + window.scrollY;
        if (window.scrollY + window.innerHeight / 2 > absolute_pos) {
            selected_idx = i;
        }
    }
    
    if (window.scrollY > 50) {
        navbar.style.height = "110px";
        for (let i = 0; i < navbar_children.length; i++) {
            navbar_children[i].style.fontSize = "25px";
            navbar_children[i].classList.remove('navbar-current');
        }
    } else {
        navbar.style.height = "80px";
        for (let i = 0; i < navbar_children.length; i++) {
            navbar_children[i].style.fontSize = "15px";
            navbar_children[i].classList.remove('navbar-current');
        }
    }
    
    if (selected_idx >= 0) {navbar_children[selected_idx].classList.add('navbar-current');}

}


// Modal stuff

var modal_bkg = document.getElementById("guide");
var modal_content = document.getElementById("guide-content");


// Keeping this simple for now, maybe add an animation later when there's more time
var modal_btn = document.getElementById("guide-button");
modal_btn.addEventListener('click', () => {
    modal_bkg.style.display = "block";
});

modal_bkg.addEventListener('click', () => {
    modal_bkg.style.display = "none";
})