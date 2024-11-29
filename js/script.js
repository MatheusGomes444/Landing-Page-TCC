const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registrolink = document.querySelector('.registro-link');
const btnLoginpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Carrossel
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;
let autoSlideInterval;

// Função para atualizar o carrossel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Função para ir para o próximo slide
function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Função para ir para o slide anterior
function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Função para ir a um slide específico
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
    autoSlideInterval = setInterval(next, 3000); // Troca a cada 3 segundos
}

// Função para parar o carrossel automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Adiciona eventos para os botões do carrossel
nextButton.addEventListener('click', () => {
    stopAutoSlide(); // Para o auto slide ao clicar
    next();
    startAutoSlide(); // Reinicia o auto slide
});
prevButton.addEventListener('click', () => {
    stopAutoSlide(); // Para o auto slide ao clicar
    prev();
    startAutoSlide(); // Reinicia o auto slide
});
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoSlide(); // Para o auto slide ao clicar
        goToSlide(index);
        startAutoSlide(); // Reinicia o auto slide
    });
});

// Inicializa o carrossel
updateCarousel();
startAutoSlide(); // Inicia o carrossel automático

function toggleModal() {
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

registrolink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnLoginpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});