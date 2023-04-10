const playButton = document.querySelector('.play-button');
const videoContainer = document.querySelector('.video-container');
const videoIframe = videoContainer.querySelector('iframe');

playButton.addEventListener('click', () => {
  videoIframe.setAttribute('src', 'video/videoplayback.mp4');
  videoContainer.style.paddingBottom = '0';
  playButton.style.display = 'none';
});
