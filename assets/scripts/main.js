const playButton = document.querySelector('.thumbnail .play');

playButton.addEventListener('click', () => {
  const videoFrame = document.querySelector('.video-frame');
  const iframe = document.querySelector('iframe');

  videoFrame.classList.add('playing');

  iframe.src += '&autoplay=1';
  console.log(iframe.src);
})

function switchTheme() {
  const body = document.body;
  const dataTheme = body.getAttribute('data-theme');

  if (dataTheme === 'light') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}