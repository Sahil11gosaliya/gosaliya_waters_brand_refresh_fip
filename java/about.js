document.querySelector('.play-button').addEventListener('click', function() {
  var video = this.nextElementSibling;
  video.classList.add('playing');
  video.play();
});
