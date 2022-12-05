'use strict';

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  textEl.style.fontSize = event.target.value + 'px';
});
