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
  imgSrc.src = 'img/pause.png';
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


