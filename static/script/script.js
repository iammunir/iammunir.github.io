const body = document.querySelector('body');
const container = document.querySelector('.container');
const checkboxTheme = document.getElementById('theme');
const themeLight = localStorage.getItem('themeLight');
const year = document.getElementById('year');

if(themeLight) {
  body.classList.add('light');
  const check = checkboxTheme.getAttribute('checked');
  if (!check) {
    checkboxTheme.setAttribute('checked', 'true');
  }
} else {
  body.classList.remove('light');
  const check = checkboxTheme.getAttribute('checked');
  if (check) {
    checkboxTheme.removeAttribute('checked');
  }
}

checkboxTheme.addEventListener('change', () => {
  const theme = body.classList.toggle('light');
  if(theme) {
    localStorage.setItem('themeLight', 'true');
    checkboxTheme.setAttribute('checked', 'true');
  } else {
    localStorage.removeItem('themeLight');
    checkboxTheme.removeAttribute('checked');
  }
});

year.innerHTML = new Date().getFullYear();

function loadBody() {
  body.classList.remove('spinner');
  container.style.display = 'flex';
}