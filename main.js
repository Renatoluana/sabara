const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')
function onscroll(){
 showNavOnScroll()
 backToTopButtononscroll()
}

function showNavOnScroll(){
  if (scroll > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopButtononscroll() {
  if (scrollY > 400){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')

}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
}).reveal(`#home, #home img, .stats,
#services, services header,#services .cards
#about, #about header, #about .contend`);