const Audio = document.getElementById("id-capitulo");
const ButtonNextCap = document.getElementById("proximo");
const ButtonPreviousCap = document.getElementById("anterior");
const PlayButton = document.getElementById("play-pause");
const CapH1 = document.getElementById("capitulo");
const AmountCaps = 10;

let AudioPS = false;
let CapCurrent = 1;

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

function NextCap() {
  StopAudio();
  if (CapCurrent < AmountCaps) {
    CapCurrent = CapCurrent + 1;
  } else {
    CapCurrent = 1;
  }
  Audio.src = "./audios/" + CapCurrent + ".mp3";
  CapH1.innerText = "Capítulo " + CapCurrent;
  PlayButton.classList.remove("tocando");
}

function PrevCap() {
  StopAudio();
  if (CapCurrent === 1) {
    CapCurrent = AmountCaps;
  } else {
    CapCurrent = AmountCaps - 1;
  }
  Audio.src = "./audios/" + CapCurrent + ".mp3";
  CapH1.innerText = "Capítulo " + CapCurrent;
  PlayButton.classList.remove("tocando");
}

PlayButton.addEventListener("click", PlayOrPause);
ButtonNextCap.addEventListener("click", NextCap);
ButtonPreviousCap.addEventListener("click", PrevCap);
