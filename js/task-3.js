const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const value = nameInput.value.trim();
  nameOutput.textContent = value || 'Anonymous';
});
