const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registrolink = document.querySelector('.registro-link');
const btnLoginpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const items = document.querySelectorAll('.carousel-item');
let numberOfSlides = 4;
const right = document.querySelector('.right');
const left = document.querySelector('.left');

const slider = document.querySelector('.slider');

let sectionIndex = 0;
function reset() {
    for (let i=0; i<slider.children.length; i++) {
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}
right.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex < numberOfSlides-1) ? sectionIndex + 1 : numberOfSlides-1;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
left.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
function toggleModal() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.toggle('active');
}
document.querySelector('.registro-link').addEventListener('click', function() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.registro').style.display = 'block';
});

document.querySelector('.login-link').addEventListener('click', function() {
    document.querySelector('.registro').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
});
document.querySelector('.registro').style.display = 'none';

registrolink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnLoginpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

items[currentSlide].classList.remove('active');

currentSlide = (currentSlide + direction + items.length) % items.length; // Cálculo circular para o índice
items[currentSlide].classList.add('active');
