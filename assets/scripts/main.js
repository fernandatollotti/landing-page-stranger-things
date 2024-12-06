function switchTheme() {
  const body = document.body;
  const dataTheme = body.getAttribute('data-theme');

  if (dataTheme === 'light') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}