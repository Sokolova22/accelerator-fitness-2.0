let video = document.querySelector('.gym__video');
let videoButton = document.querySelector('.gym__video-button');

function videoButtonOnclick() {
  if (video.paused) {
    video.play();
    videoButton.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoButton.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
  videoButton.addEventListener('click', videoButtonOnclick);
}
