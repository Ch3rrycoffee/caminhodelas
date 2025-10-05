const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.nav-arrow.left');
const rightBtn = document.querySelector('.nav-arrow.right');

let current = 1; 

function updateCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove('center');
    if (i === current) {
      card.classList.add('center');
    }
  });
}

leftBtn.onclick = () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
};

rightBtn.onclick = () => {
  current = (current + 1) % cards.length;
  updateCarousel();
};

updateCarousel();