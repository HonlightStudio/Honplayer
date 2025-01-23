const playBtn = document.getElementById('play');
const musictext = document.getElementById('MusicName');
const playimg = document.getElementById('eximg');
const musictextbox = document.getElementById('musicinfo');
const musicimg = document.getElementById('img1');
const nextBtn = document.getElementById('next');
const exBtn = document.getElementById('ex');
const audio = new Audio();
const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');



index = 0;

const songs = [
  "music/Didam-Talk-Down.mp3",
  "music/Moalagh-Sina-Sae.m4a",
  "music/Saghi-Sijal,Canis,Sepehr-Khalse.mp3",
  "music/Ti-Amo-Talk-Down.mp3",
  "music/TooRagi-shayea.mp3"
];

const playpuase = [
  "srcimg/pause.png",
  "srcimg/play.png",
  
];

const covers = [
  "images/didam.jpg",
  "images/moalagh.jpg",
  "images/saghi.jpg",
  "images/tiamo.jpg",
  "images/tooragi.jpg"


];

audio.src = songs[0];
let musicName = "";






function togglePlayPause() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }

  musicName = audio.src.split('/').pop().replace(/\.[^/.]+$/, '');
  musictext.innerHTML = musicName;
  musicimg.setAttribute("src",covers[index]);
}

function next(){
  index++;
  audio.src = songs[index%6]
  playSong();
  musicName = audio.src.split('/').pop().replace(/\.[^/.]+$/, '');
  musictext.innerHTML = musicName;
  musicimg.setAttribute("src",covers[index]);

}
function back(){
  index--;
  audio.src = songs[index%6]
  playSong();
  musicName = audio.src.split('/').pop().replace(/\.[^/.]+$/, '');
  musictext.innerHTML = "musicName";
  musicimg.setAttribute("src",covers[index]);
}


function playSong() {
  audio.play();
  musictextbox.style.animation = "moveup 1s forwards";
  playimg.src = playpuase[0];
}

function pauseSong() {
  audio.pause();
  musictextbox.style.animation = "movedown 1s forwards";
  playimg.src = playpuase[1];
}

playBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', next);
exBtn.addEventListener('click', back);
