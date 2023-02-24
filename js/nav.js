let menu = document.querySelector('.burgerMenu');
let imgContainer = document.querySelector('.imgContainer');

menu.addEventListener('click', () => {
    menu.classList.toggle("clicked")
    imgContainer.classList.toggle("open")
})
