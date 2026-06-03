import './styles/app.scss';

// Scipt for carrousel 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const cards = track.querySelectorAll('.card');
    let index = 0;

    function goTo(i) {
        index = i;
        const cardWidth = track.parentElement.offsetWidth;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // Défilement auto toutes les 5 secondes 
    let autoplay = setInterval(() => {
        const next = index < cards.length - 1 ? index + 1 : 0;
        goTo(next);
    }, 5000);

    document.getElementById('prevBtn').addEventListener('click', () => {
        clearInterval(autoplay);
        if (index > 0) goTo(index - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        clearInterval(autoplay);
        if (index < cards.length - 1) goTo(index + 1);
    });
});

// Menu burger
const burgerBtn = document.getElementById('burgerBtn');
const navMenu   = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        burgerBtn.classList.toggle('is-open', isOpen);
        burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('is-open');
            burgerBtn.classList.remove('is-open');
            burgerBtn.setAttribute('aria-expanded', false);
        }
    });
}
