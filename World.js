const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("click", () => {

cards.forEach(c => c.classList.remove("active"));

card.classList.add("active");

});

});

const hearts = document.querySelectorAll(".favorite i");

hearts.forEach(heart => {

heart.addEventListener("click", (e) => {

e.stopPropagation();

heart.classList.toggle("fa-solid");
heart.classList.toggle("fa-regular");

});

});