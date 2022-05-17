const player = document.querySelector('.player');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.play');

const audio = document.querySelector('.audio');

const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');

const title = document.querySelector('.song');
const cover = document.querySelector('.cover-img');
const imgSrc = document.querySelector('.img__src');

const songs = [
  'Big_Baby_Tape_kizaru_-_99_Problems',
  'JONY_HammAli_-_Naverno_ty_menya_ne_pomnish',
  'Tinlicker_Helsloot_-_Because_You_Move_Me'
];

let songIndex = 2 ;

function loadSong(song) {
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/cover${songIndex + 1}.jpg`;
}

loadSong(songs[songIndex]);

function playSong() {
  player.classList.add('playing');
  cover.classList.add('active');
  imgSrc.src = 'img/pause.svg';
  audio.play();
}

function pauseSong() {
  player.classList.remove('playing');
  cover.classList.remove('active');
  imgSrc.src = 'img/play.svg';
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('playing');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener('click', nextSong);

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', prevSong);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPrecent = (currentTime / duration) * 100;
  progress.style.width = `${progressPrecent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;  
}

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);