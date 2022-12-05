'use strict';

const formEl = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Attention! Fields must not be empty!');
  }
  const userInfo = { email: email.value, password: password.value };
  console.log(userInfo);
  event.currentTarget.reset();
}

formEl.addEventListener('submit', handleSubmit);
