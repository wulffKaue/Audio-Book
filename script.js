const Audio = document.getElementById("id-capitulo");
const PlayButton = document.getElementById("play-pause");

let AudioPS = false;

function PlayAudio() {
  Audio.play();
  AudioPS = true;
}

function StopAudio() {
  Audio.pause();
  AudioPS = false;
}

function PlayOrPause() {
  if (AudioPS === true) {
    StopAudio();
    PlayButton.classList.remove("tocando");
  } else {
    PlayAudio();
    PlayButton.classList.add("tocando");
  }
}

PlayButton.addEventListener("click", PlayOrPause);
