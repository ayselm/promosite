let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let burger_img = burger.querySelector('img')
burger.onclick = function () {
  menu.classList.toggle('show')
  if (menu.classList.has('show')) {
    burger_img.setAttribute('src', 'img/close.svg')
  }
  else {
    burger_img.setAttribute('src', 'img/button.svg')
  }

}

let env = document.querySelector('.env')
let modal = document.querySelector('.modal')
let cancel = document.querySelector('.cancel')
env.onclick = function () {
  modal.classList.add('show')
}

cancel.onclick = function () {
  modal.classList.remove('show')
}

let button_black = document.querySelector('.button_black')

button_black.onclick = function (event) {
event.preventDefault();
modal.classList.add('show')
}
