const player = document.querySelector('.player');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.play');

const audio = document.querySelector('.audio');

const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');

const title = document.querySelector('.song');
const cover = document.querySelector('.cover-img');
const imgSrc = document.querySelector('.src__img');

const songs = [
  'Big Baby Tape, kizaru - 99 Problems',
  'JONY, HammAli - Наверно, ты меня не помнишь',
  'Tinlicker, Helsloot - Because You Move Me'
];

let songIndex = 0;

function loadSong(song) {
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/cover${songIndex + 1}.jpg`;
}

loadSong(songs[songIndex]);

function playSong() {
  player.classList.add('playing');
  audio.play();
}

function pauseSong() {
  player.classList.remove('playing');
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


