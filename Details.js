const wishlist = document.querySelector(".wish");

wishlist.addEventListener("click", function(){

const icon = wishlist.querySelector("i");

icon.classList.toggle("fa-regular");
icon.classList.toggle("fa-solid");

});