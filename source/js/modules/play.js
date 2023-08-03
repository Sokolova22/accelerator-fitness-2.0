let video = document.querySelector('.gym__video');
let videoButton = document.querySelector('.gym__video-button');

function videoButtonOnclick() {
  if (video.paused) {
    video.play();
    video.controls = true;
    video.volume = 0.2;
    videoButton.style.display = 'none';
  } else {
    video.pause();
    video.controls = false;
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
