const modeSwitchButton = document.querySelector('#mode-switch');

modeSwitchButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const mode = document.body.classList.contains('dark-mode') ? "dark mode" : "light moode";
  modeSwitchButton.textContent = mode;
})