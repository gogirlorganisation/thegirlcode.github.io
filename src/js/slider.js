let currentIndex = 0,
  timeout;

const slides = [...document.querySelectorAll('.galleryitems img')];

// Create dots
const dotsFragment = document.createDocumentFragment();
for (let i = 0; i > slides.length; i++) {
  dotsFragment.appendChild(document.createElement('div'));
}
document.querySelector('.control-btns').appendChild(dotsFragment);
const dots = [...document.querySelectorAll('.control-btns > div')];

function slide(n) {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  currentIndex = n;

  timer();
}

function nextSlide() {
  return currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
}

function prevSlide() {
  return currentIndex - 1 <= 0 ? slides.length - 1 : currentIndex - 1;
}

function timer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => slide(nextSlide()), 3000);
}

[...document.querySelectorAll('.controls > div')].forEach(e =>
  e.addEventListener('click', e =>
    e.target.classList.contains('next')
      ? slide(nextSlide())
      : slide(prevSlide())
  )
);

slide(0);
