import './styles/app.scss';

// Script for carrousel 
document.addEventListener('DOMContentLoaded', function () {
  var track = document.getElementById('carouselTrack');
  if (!track) return;
  var viewport = track.closest('.carousel-viewport');
  if (!viewport) return;
  var slides = track.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;
  var index = 0;
  function goTo(i) {
    if (i < 0) {
      index = slides.length - 1;
    } else if (i >= slides.length) {
      index = 0;
    } else {
      index = i;
    }
    var slideWidth = viewport.clientWidth;
    var viewportWidth = window.innerWidth;
    var safetyInset = 0;
    if (viewportWidth <= 360) {
      safetyInset = 8;
    } else if (viewportWidth <= 390) {
      safetyInset = 12;
    } else if (viewportWidth <= 425) {
      safetyInset = 18;
    }
    var rawScale = (slideWidth - safetyInset) / 350;
    var cardScale = viewportWidth <= 425 ? Math.max(0.68, Math.min(1, rawScale)) : 1;
    track.style.setProperty('--card-scale', cardScale.toString());
    track.style.transform = "translateX(-".concat(index * slideWidth, "px)");
  }
  window.addEventListener('resize', function () {
    return goTo(index);
  });
  var autoplay = setInterval(function () {
    goTo(index + 1);
  }, 5000);
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      clearInterval(autoplay);
      goTo(index - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      clearInterval(autoplay);
      goTo(index + 1);
    });
  }
  goTo(0);
});

// Menu burger
var burgerBtn = document.getElementById('burgerBtn');
var navMenu = document.getElementById('navMenu');
if (burgerBtn && navMenu) {
  burgerBtn.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', function (e) {
    if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', false);
    }
  });
}
