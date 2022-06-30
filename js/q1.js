let modal = document.querySelector('.modal')
let cancel = document.querySelector('.cancel')
let button_black = document.querySelector('.button_black')

button_black.onclick = function (event) {
event.preventDefault();
modal.classList.add('show')
}
cancel.onclick = function () {
  modal.classList.remove('show')
}
