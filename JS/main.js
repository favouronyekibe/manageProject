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


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  })