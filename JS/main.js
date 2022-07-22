const menuOpen = document.querySelector('.openMenu')
const menuClose = document.querySelector('.closeMenu')
const menu = document.querySelector('.navlinks')
const container = document.querySelector('.container')

menuOpen.addEventListener('click', function(){
    menu.style.top = "30%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    container.classList.toggle('activeBlur')
})

menuClose.addEventListener('click', function(){
    menu.style.top = "-30%"
    menuClose.style.display = "none"
    menuOpen.style.display = "block"
    container.classList.toggle('activeBlur')
})