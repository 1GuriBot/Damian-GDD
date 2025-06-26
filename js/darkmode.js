// Alternância de modo escuro
const darkModeBtn = document.getElementById('toggle-darkmode');
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add('darkmode');
    localStorage.setItem('damian-darkmode', '1');
  } else {
    body.classList.remove('darkmode');
    localStorage.setItem('damian-darkmode', '0');
  }
}

darkModeBtn.addEventListener('click', () => {
  setDarkMode(!body.classList.contains('darkmode'));
});

// Carregar preferência ao iniciar
if (localStorage.getItem('damian-darkmode') === '1') {
  setDarkMode(true);
}
