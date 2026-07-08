document.addEventListener('DOMContentLoaded', () => {
  const nailCards = document.querySelectorAll('.nail-card');
  nailCards.forEach((card) => {
    card.addEventListener('click', () => {
      nailCards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const productCards = document.querySelectorAll('.card');
  productCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  const worldCards = document.querySelectorAll('.worldcup .card');
  worldCards.forEach((card) => {
    card.addEventListener('click', () => {
      worldCards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const hearts = document.querySelectorAll('.favorite i');
  hearts.forEach((heart) => {
    heart.addEventListener('click', (event) => {
      event.stopPropagation();
      heart.classList.toggle('fa-solid');
      heart.classList.toggle('fa-regular');
    });
  });

  const wishlistButton = document.querySelector('.wish');
  if (wishlistButton) {
    wishlistButton.addEventListener('click', () => {
      const icon = wishlistButton.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
      }
    });
  }
});
