let menu = document.querySelector('.burgerMenu');
let imgContainer = document.querySelector('.imgContainer');
let centerText = document.querySelector(".nav-text")

menu.addEventListener('click', () => {
    menu.classList.toggle("clicked")
    imgContainer.classList.toggle("open")
    centerText.classList.toggle('opacity')
})
