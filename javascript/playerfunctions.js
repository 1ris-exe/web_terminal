//Functions for operating the in-house music player of WIN 95 Player

const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');
let audio = document.getElementById('audio');
const album = document.getElementById('album-title');
const artist = document.getElementById('artist-name');
const songName = document.getElementById('track-name');
const track_timer = document.getElementById('track-timer');
const totalDuration = document.getElementById('total-duration');
const trackDuration = document.getElementById('track-duration');
//const currentTime = document.querySelector('#curr')


const playlist = [
    {
      trackName: "mercykiller",
      album: "mercykiller",
      artist: "iRis.EXE",
      src: "mercykiller.mp3"
    },
    {
        trackName: "chemical bleed",
      album: "mercykiller",
      artist: "iRis.EXE",
      src: "chemicalbleed.wav"
    },
    {
        trackName: "sanctuary",
      album: "mercykiller",
      artist: "iRis.EXE",
      src: "sanctuary.mp3",
    },
  ];


let trackNumber = 0;
//audio.src = playlist[track.src];

      //play selected song
function playSong() {
       // console.log(`Playing song... ${getTrackTitle()}`)
       audio.play();
    }
    function pauseSong(){
        audio.pause();
    }

function loadTrack(trackNumber) {
    updateTimer();
    audio = new Audio(playlist[trackNumber].src);
    songName.innerText = playlist[trackNumber].trackName;
    album.innerText = playlist[trackNumber].album;
    artist.innerText = playlist[trackNumber].artist;
    audio.addEventListener('ended', nextSong);
    audio.addEventListener('timeupdate', updateTimer);
   // audio.src = playlist[trackNumber].src;
    
}
loadTrack(trackNumber);

//curr_track.load();

function closeMediaWindow(){
  var closeButton=document.getElementById("windows-box");
  if (closeButton.style.display === "none") {
    closeButton.style.display = "block";
  } else {
    closeButton.style.display = "none";
  }
  audio.pause();
  audio = new Audio(playlist[trackNumber].src);
  loadTrack(trackNumber);
}

function startover(){
//play current song from beginning
audio.pause();
audio = new Audio(playlist[trackNumber].src);
loadTrack(trackNumber);

playBtn.addEventListener('click', playSong);
        pauseBtn.addEventListener('click', pauseSong);
        nextBtn.addEventListener('click', nextSong);
        prevBtn.addEventListener('click', prevSong);
        stopBtn.addEventListener('click', startover);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', updateTimer);
}



    function nextSong(){
      //play the next song
      audio.pause();
  
      if (trackNumber < 0 || trackNumber >=playlist.length-1){
      trackNumber=0;
  
      }else {
          trackNumber++;
      }
  
      audio = new Audio(playlist[trackNumber].src);
      loadTrack(trackNumber);
        playSong();
        
      }
function prevSong(){
    audio.pause();

    if (trackNumber > 0){
    trackNumber --;
    } else {
    trackNumber = playlist.length-1;
  }
  //Load and play the new track
  audio = new Audio(playlist[trackNumber].src);
  loadTrack(trackNumber);
  playSong();

}

//function fastforward(){
//fast forward 10 sec
//}



function getTrackNumber() {
    return trackNumber;
}

function updateTimer(track) {
    track_timer.innerHTML = `00:${formatTime(audio.currentTime)}`;
    trackDuration.innerHTML = `Track Duration: 00:${formatTime(audio.duration)}`;
    totalDuration.innerHTML = `Total Time: 00:09:29`;
    if (isNaN(audio.duration)){
        trackDuration.innerHTML = `00:00`;
    }
}

        playBtn.addEventListener('click', playSong);
        pauseBtn.addEventListener('click', pauseSong);
        nextBtn.addEventListener('click', nextSong);
        prevBtn.addEventListener('click', prevSong);
        stopBtn.addEventListener('click', startover);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', updateTimer)


//function onlyTwoDigits(d) {
  //  return (d < 10) ? '0' + d.toString() : d.toString();
//}


function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
    
/*for (let i=0; i<playlist.length; i++){
    loadTrack(i);
            trackNumber = i;
        playBtn.addEventListener('click', playSong);
        pauseBtn.addEventListener('click', pauseSong);
        nextBtn.addEventListener('click', nextSong);
        prevBtn.addEventListener('click', prevSong);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', )
    }  
*/


