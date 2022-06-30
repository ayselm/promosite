let modal = document.querySelector('.modal')

let button_black = document.querySelector('.button_black')

button_black.onclick = function (event) {
event.preventDefault();
modal.classList.add('show')
}
let cancel = document.querySelector('.cancel')

cancel.onclick = function () {
  modal.classList.remove('show')
}
