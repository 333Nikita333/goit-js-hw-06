function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.innerHTML = bodyEl.style.backgroundColor;
});
