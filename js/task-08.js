const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);

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
