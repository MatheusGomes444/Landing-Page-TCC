const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registrolink = document.querySelector('.registro-link');
const btnLoginpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const items = document.querySelectorAll('.carousel-item');
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
